import {
  LongTextField,
  NiceButton,
  SelectField,
  TextField,
  VStack,
} from "@login-app/ui-react";
import { ChangeEventHandler, FormEventHandler } from "react";
import { isNoteShareLevel, Note, NoteHandler } from "../../data/Note";

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

  const onValueChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "title") {
      onChange({ ...note, title: value });
    } else if (name === "body") {
      onChange({ ...note, body: value });
    } else if (name === "shareLevel") {
      if (!isNoteShareLevel(value)) {
        throw new Error(`Unknown share level: ${value}`);
      }
      onChange({ ...note, shareLevel: value });
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
          <LongTextField
            label="Body"
            name="body"
            onChange={onValueChange}
            value={note.body}
          />
          <SelectField
            label="Share level"
            name="shareLevel"
            onChange={onValueChange}
            value={note.shareLevel}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </SelectField>
          <NiceButton primary>Save</NiceButton>
        </VStack>
      </fieldset>
    </form>
  );
};
