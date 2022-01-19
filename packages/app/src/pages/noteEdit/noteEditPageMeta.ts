export const noteEditPageRoute = noteEditPagePath(":noteId");

export function noteEditPagePath(noteId: string): string {
  if (!noteId) {
    throw new Error("noteId required");
  }
  return `/notes/${noteId}/edit`;
}
