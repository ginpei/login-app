import {
  dataRecordFromFirestore,
  dataRecordToFirestore,
} from "@login-app/firebase-utils";
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc as fbDoc,
  DocumentReference,
  FirestoreDataConverter,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { createProfile, Profile } from "../../data/Profile";
import { db } from "../../misc/firebase";

export type ProfileDocument = DocumentReference<Profile>;

const profileDataConverter: FirestoreDataConverter<Profile> = {
  fromFirestore(ss) {
    const data = ss.data();
    return { ...createProfile(data), ...dataRecordFromFirestore(ss) };
  },

  toFirestore(profile) {
    return dataRecordToFirestore(profile);
  },
};

export function getProfileCollection(): CollectionReference<Profile> {
  return collection(db, "profiles").withConverter(profileDataConverter);
}

export function getProfileDoc(profileId: string): ProfileDocument {
  const coll = getProfileCollection();
  return fbDoc(coll, profileId);
}

export async function saveProfile(profile: Profile): Promise<ProfileDocument> {
  const { id } = profile;
  const now = serverTimestamp();

  if (id) {
    const doc = getProfileDoc(id);
    await setDoc(doc, { ...profile, updatedAt: now });
    return doc;
  }

  const coll = getProfileCollection();
  return addDoc(coll, { ...profile, createdAt: now, updatedAt: now });
}

export async function deleteProfile(profileId: string): Promise<void> {
  const doc = getProfileDoc(profileId);
  return deleteDoc(doc);
}
