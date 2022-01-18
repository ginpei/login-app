export interface Note {
  body: string;
  id: string;
  shareLevel: NoteShareLevel;
  title: string;
  userId: string;
}

export type NoteShareLevel = typeof noteShareLevels[number];

export type NoteHandler = (note: Note) => void;

const noteShareLevels = ["public", "private"] as const;

export function createNote(initial: Partial<Note> = {}): Note {
  return {
    body: initial.body ?? "",
    id: initial.id ?? "",
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
