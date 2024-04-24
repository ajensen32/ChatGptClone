import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// Parse the service account key from environment variable
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

// Initialize Firebase app if not already initialized
if (getApps().length === 0) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error("Error initializing Firebase app:", error);
    // Handle error appropriately, like logging or exiting
    process.exit(1);
  }
}

// Access Firestore instance
const adminDb = admin.firestore();

export { adminDb };
