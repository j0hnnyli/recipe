import { admin } from "@/lib/firebase/firestoreAdmin";

export default async function getUserIdFromCookie(cookie: string) : Promise<string | null> {
  if(!cookie) return null;

  try{
    const decodedClaims = await admin.auth().verifySessionCookie(cookie, true);
    console.log("Session Cookie:", cookie);
    console.log("Decoded userId:", decodedClaims.uid);
    return decodedClaims.uid;
  }catch{
    console.error("Invalid or expired session cookie");
    return null;
  }
}