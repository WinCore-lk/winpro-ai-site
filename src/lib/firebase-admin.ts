import admin from "firebase-admin";

if (!admin.apps.length) {
    try {
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

        // Validate essentials
        const config = {
            project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            private_key: privateKey,
        };

        if (!config.project_id || !config.client_email || !config.private_key) {
            console.error("Firebase Admin Error: Missing environment variables.");
            console.log("Details - Project ID:", !!config.project_id, "Email:", !!config.client_email, "Key:", !!config.private_key);
            throw new Error("Credentials missing from environment.");
        }

        admin.initializeApp({
            credential: admin.credential.cert(config as any),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });

        console.log("Firebase Admin initialized successfully.");
    } catch (error) {
        console.error("CRITICAL: Firebase Admin failed to initialize:", error);
    }
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
