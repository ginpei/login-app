import {
  addDoc,
  collection,
  CollectionReference,
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
    return createNote(data);
  },

  toFirestore(note) {
    return {
      body: note.body,
      title: note.title,
    };
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
