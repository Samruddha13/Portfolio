import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // In a real implementation, you would:
      // 1. Save the message to a database
      // 2. Send an email notification
      // 3. Send an auto-reply to the user
      
      // For now, we'll just simulate a successful submission
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Message sent successfully! Thank you for reaching out." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
