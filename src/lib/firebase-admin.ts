import admin from "firebase-admin";

if (!admin.apps.length) {
    try {
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: privateKey,
            }),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });

        console.log("Firebase Admin initialized");
    } catch (error) {
        console.error("Firebase Admin initialization error:", error);
    }
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
