import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc as fbDoc,
  DocumentReference,
  FirestoreDataConverter,
  setDoc,
} from "firebase/firestore";
import { createProfile, Profile } from "../../data/Profile";
import { db } from "../../misc/firebase";

export type ProfileDocument = DocumentReference<Profile>;

const profileDataConverter: FirestoreDataConverter<Profile> = {
  fromFirestore(ss) {
    const data = ss.data();
    return createProfile({ ...data, id: ss.id });
  },

  toFirestore(profile) {
    const { id, ...data } = profile;
    return data;
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
  if (id) {
    const doc = getProfileDoc(id);
    await setDoc(doc, profile);
    return doc;
  }

  const coll = getProfileCollection();
  return addDoc(coll, profile);
}

export async function deleteProfile(profileId: string): Promise<void> {
  const doc = getProfileDoc(profileId);
  return deleteDoc(doc);
}
