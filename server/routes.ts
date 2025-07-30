import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { emailService } from "./services/email";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const data = insertMessageSchema.parse(req.body);

      // Store message in database
      const message = await storage.createMessage(data);

      // Try to send email notification
      try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.NOTIFY_EMAIL) {
          await emailService.sendContactNotification(data);
        }
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
        // Continue execution even if email fails
      }

      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      }

      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to process your message. Please try again." 
      });
    }
  });

  return createServer(app);
}