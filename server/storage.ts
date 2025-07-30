import { users, type User, type InsertUser } from "@shared/schema";
import { contactMessages, type Message, type InsertMessage } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
}

// Memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Message[];
  currentId: number;

  constructor() {
    this.users = new Map();
    this.messages = [];
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.currentId++,
      ...insertMessage,
    };
    this.messages.push(message);
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return this.messages;
  }
}

// Database storage implementation
export class DbStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [inserted] = await this.db.insert(contactMessages)
      .values(message)
      .returning();
    return inserted;
  }

  async getMessages(): Promise<Message[]> {
    return await this.db.select().from(contactMessages);
  }
    async getUser(id: number): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    async getUserByUsername(username: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    async createUser(user: InsertUser): Promise<User> {
        throw new Error("Method not implemented.");
    }
}

// Use database storage in production, memory storage in development
export const storage = process.env.NODE_ENV === "production"
  ? new DbStorage()
  : new MemStorage();