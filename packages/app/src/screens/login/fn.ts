import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { userProfileSsToDataRecord } from "@login-app/firebase-utils";
import { firestore } from "../../misc/firebase";

export async function loadUserProfile(user: User): Promise<void> {
  console.log(`# !`, user);
  const ref = doc(firestore, "userProfiles", user.uid);
  const ss = await getDoc(ref);
  const data = ss.data();
  if (!ss.exists || !data) {
    console.log(`# No data`, user.uid);
    return;
  }

  const profile = userProfileSsToDataRecord(ss);
  console.log("# profile", profile);
}
