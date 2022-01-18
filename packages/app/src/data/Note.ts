export interface Note {
  body: string;
  id: string;
  title: string;
}

export type NoteHandler = (note: Note) => void;

export function createNote(initial: Partial<Note> = {}): Note {
  return {
    body: initial.body ?? "",
    id: initial.id ?? "",
    title: initial.title ?? "",
  };
}
