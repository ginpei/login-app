import { createDataRecord, DataRecord } from "@ginpei/firebase-utils-react";

export interface Note extends DataRecord {
  body: string;
  shareLevel: NoteShareLevel;
  title: string;
  userId: string;
}

export type NoteShareLevel = typeof noteShareLevels[number];

export type NoteHandler = (note: Note) => void;

const noteShareLevels = ["public", "private"] as const;

export function createNote(initial: Partial<Note> = {}): Note {
  return {
    ...createDataRecord(initial),
    body: initial.body ?? "",
    shareLevel: initial.shareLevel ?? "private",
    title: initial.title ?? "",
    userId: initial.userId ?? "",
  };
}

export function isNoteShareLevel(
  shareLevel: unknown
): shareLevel is NoteShareLevel {
  return (
    typeof shareLevel === "string" &&
    noteShareLevels.map((v) => String(v)).includes(shareLevel)
  );
}
