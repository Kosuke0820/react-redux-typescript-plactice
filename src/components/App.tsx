import * as React from 'react';

import InputSection from './InputSection';
import TodoList from './TodoList';

import { Todo } from './TodoList';

interface Props {}

export interface State {
  inputTitle: string;
  todos: Todo[];
}


class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputTitle: '',
      todos: [],
    }
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      inputTitle: e.currentTarget.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask = {
      title: this.state.inputTitle,
      datetime: new Date(),
      done: false,
    };
    this.setState({
      inputTitle: '',
      todos: [...this.state.todos, newTask]
    });
  }

  render() {
    return (
      <section>
        <InputSection
          inputTitle={this.state.inputTitle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todos={this.state.todos}
        />
      </section>
    );
  }
}

export default App;
