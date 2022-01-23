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
  DocumentSnapshot,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../misc/firebase";
import { createNote, Note } from "./Note";

export type NoteDocument = DocumentReference<Note>;

const noteDataConverter: FirestoreDataConverter<Note> = {
  fromFirestore(ss) {
    return { ...createNote(ss.data()), ...dataRecordFromFirestore(ss) };
  },

  toFirestore(data) {
    return dataRecordToFirestore(data);
  },
};

export function getNoteCollection(): CollectionReference<Note> {
  return collection(db, "notes").withConverter(noteDataConverter);
}

export function getNoteDoc(noteId: string): NoteDocument {
  const coll = getNoteCollection();
  return fbDoc(coll, noteId);
}

export function ssToNote(ss: QueryDocumentSnapshot<Note>): Note;
export function ssToNote(ss: DocumentSnapshot<Note>): Note | null;
export function ssToNote(
  ss: QueryDocumentSnapshot<Note> | DocumentSnapshot<Note>
): Note | null {
  return ss.exists() ? ss.data() : null;
}

export async function saveNote(note: Note): Promise<NoteDocument> {
  const { id } = note;
  const now = serverTimestamp();

  if (id) {
    const doc = getNoteDoc(id);
    await setDoc(doc, { ...note, updatedAt: now });
    return doc;
  }

  const coll = getNoteCollection();
  return addDoc(coll, { ...note, createdAt: now, updatedAt: now });
}

export async function deleteNote(noteId: string): Promise<void> {
  const doc = getNoteDoc(noteId);
  return deleteDoc(doc);
}
