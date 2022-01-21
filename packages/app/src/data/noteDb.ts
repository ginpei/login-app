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
import { db } from "../misc/firebase";
import { createNote, Note } from "./Note";

export type NoteDocument = DocumentReference<Note>;

const noteDataConverter: FirestoreDataConverter<Note> = {
  fromFirestore(ss) {
    const data = ss.data();
    return createNote({ ...data, id: ss.id });
  },

  toFirestore(note) {
    const { id, ...data } = note;
    return data;
  },
};

export function getNoteCollection(): CollectionReference<Note> {
  return collection(db, "notes").withConverter(noteDataConverter);
}

export function getNoteDoc(noteId: string): NoteDocument {
  const coll = getNoteCollection();
  return fbDoc(coll, noteId);
}

export async function saveNote(note: Note): Promise<NoteDocument> {
  const { id } = note;
  if (id) {
    const doc = getNoteDoc(id);
    await setDoc(doc, note);
    return doc;
  }

  const coll = getNoteCollection();
  return addDoc(coll, note);
}

export async function deleteNote(noteId: string): Promise<void> {
  const doc = getNoteDoc(noteId);
  return deleteDoc(doc);
}
