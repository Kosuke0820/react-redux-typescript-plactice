import * as React from 'react';

export interface InputSectionProps {
  inputTitle: string;
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const InputSection: React.SFC<InputSectionProps> = ({
  inputTitle,
  handleChange,
  handleSubmit,
}) => (
  <div>
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        value={inputTitle}
        onChange={e => handleChange(e)}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
)

export default InputSection;
