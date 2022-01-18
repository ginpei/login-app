export interface Note {
  body: string;
  id: string;
  shareLevel: NoteShareLevel;
  title: string;
  userId: string;
}

export type NoteShareLevel = "public" | "private";

export type NoteHandler = (note: Note) => void;

export function createNote(initial: Partial<Note> = {}): Note {
  return {
    body: initial.body ?? "",
    id: initial.id ?? "",
    shareLevel: initial.shareLevel ?? "private",
    title: initial.title ?? "",
    userId: initial.userId ?? "",
  };
}
