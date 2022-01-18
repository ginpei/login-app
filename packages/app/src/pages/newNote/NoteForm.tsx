import { NiceButton, TextField, VStack } from "@login-app/ui";
import { ChangeEventHandler, FormEventHandler } from "react";
import { Note, NoteHandler } from "../../data/Note";

export interface NoteFormProps {
  disabled?: boolean;
  note: Note;
  onChange: NoteHandler;
  onSubmit: NoteHandler;
}

export const NoteForm: React.FC<NoteFormProps> = ({
  disabled,
  note,
  onChange,
  onSubmit,
}) => {
  const onFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit(note);
  };

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "title") {
      onChange({ ...note, title: value });
    } else if (name === "body") {
      onChange({ ...note, body: value });
    } else {
      throw new Error(`Unknown name: ${name || "(not set)"}`);
    }
  };

  return (
    <form className="NoteForm" onSubmit={onFormSubmit}>
      <fieldset disabled={disabled}>
        <VStack>
          <TextField
            label="Title"
            name="title"
            onChange={onValueChange}
            value={note.title}
          />
          <TextField
            label="Body"
            name="body"
            onChange={onValueChange}
            value={note.body}
          />
          <NiceButton primary>Save</NiceButton>
        </VStack>
      </fieldset>
    </form>
  );
};
