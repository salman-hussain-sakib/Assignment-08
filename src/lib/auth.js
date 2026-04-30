import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
}

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("skillsphere");

export const auth = betterAuth({
    database: mongodbAdapter(db),
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
