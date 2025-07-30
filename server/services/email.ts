import nodemailer from "nodemailer";
import { type InsertMessage } from "@shared/schema";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.NOTIFY_EMAIL) {
      console.log("Email environment variables are not properly configured");
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendContactNotification(message: InsertMessage) {
    if (!this.transporter) {
      console.error("Email transporter not initialized");
      return;
    }

    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Contact Form Message from ${message.name}`,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${message.name}</p>
          <p><strong>Email:</strong> ${message.email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.message}</p>
        `
      };

      await this.transporter.sendMail(mailOptions);
      console.log("Email notification sent successfully");
    } catch (error) {
      console.error("Failed to send email notification:", error);
      throw error;
    }
  }
}

export const emailService = new EmailService();