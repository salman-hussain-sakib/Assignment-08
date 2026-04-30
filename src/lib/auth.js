import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGODB_URL || "mongodb://placeholder";
const client = new MongoClient(mongoUrl);
const db = client.db("skillsphere");

export const auth = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.BETTER_AUTH_SECRET || "pYn8wE2vK9zM4qR7xT5bU1sD0fG3hJ6l",
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    // This allows login from ANY device and prevents 403 Forbidden on Vercel
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || "",
        "https://skill-sphere-qbmiqko1q-muhammadsalmansakibs-projects.vercel.app",
        "https://skill-sphere-salman.vercel.app" 
    ],
    advanced: {
        crossOrigin: true,
        disableCheckOrigins: true // This will fix the 403 error on multiple devices
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
        }
    },
    user: {
        additionalFields: {
            image: {
                type: "string",
                required: false,
            },
        }
    }
});
