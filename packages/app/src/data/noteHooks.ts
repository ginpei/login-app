import { getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Note } from "./Note";
import { getNoteCollection, getNoteDoc, ssToNote } from "./noteDb";

export function useUserNotes(
  userId: string | undefined
): [Note[] | undefined, Error | null] {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setNotes(undefined);
    setError(null);

    if (!userId) {
      return;
    }

    const coll = getNoteCollection();
    const q = query(coll, where("userId", "==", userId));
    getDocs(q)
      .then((ss) => {
        const newNotes = ss.docs.map((v) => ssToNote(v));
        setNotes(newNotes);
      })
      .catch((newError) => {
        setNotes([]);
        setError(newError);
      });
  }, [userId]);

  return [notes, error];
}

export function usePublicNotes(): [Note[] | undefined, Error | null] {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setNotes(undefined);
    setError(null);

    const coll = getNoteCollection();
    const q = query(coll, where("shareLevel", "==", "public"));
    getDocs(q)
      .then((ss) => {
        const newNotes = ss.docs.map((v) => ssToNote(v));
        setNotes(newNotes);
      })
      .catch((newError) => {
        setNotes([]);
        setError(newError);
      });
  }, []);

  return [notes, error];
}

export function useNote(
  noteId: string | undefined
): [Note | null | undefined, Error | null] {
  const [note, setNote] = useState<Note | null | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setNote(undefined);
    setError(null);

    if (!noteId) {
      return;
    }

    const doc = getNoteDoc(noteId);
    getDoc(doc)
      .then((ss) => {
        setNote(ssToNote(ss));
      })
      .catch((newError) => {
        setNote(null);
        setError(newError);
      });
  }, [noteId]);

  return [note, error];
}
