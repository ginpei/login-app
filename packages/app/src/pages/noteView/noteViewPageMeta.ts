export const noteViewPageRoute = noteViewPagePath(":noteId");

export function noteViewPagePath(noteId: string): string {
  if (!noteId) {
    throw new Error("noteId required");
  }
  return `/notes/${noteId}`;
}
