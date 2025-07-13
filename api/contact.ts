// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
}

const db = admin.firestore();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await db
        .collection("messages")
        .add({ name, email, message, timestamp: Date.now() });
      return res.status(200).json({ success: true, msg: "Message saved!" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Failed to save", error });
    }
  } else {
    return res.status(405).json({ msg: "Only POST allowed" });
  }
}
