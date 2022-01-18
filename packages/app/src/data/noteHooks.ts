import { sleep } from "@login-app/misc/out";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Note } from "./Note";
import { getNoteCollection } from "./noteDb";

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
        const newNotes = ss.docs.map((v) => v.data());
        setNotes(newNotes);
      })
      .catch((newError) => {
        setNotes([]);
        setError(newError);
      });
  }, []);

  return [notes, error];
}
