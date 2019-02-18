import * as React from 'react';

export interface Todo {
  title: string;
  datetime: Date;
  done: boolean;
}

interface Props {
  todos: Todo[];
}

const TodoList: React.SFC<Props> = ({
  todos
}) => (
  <div>
    {
      todos.map((todo) => (
        <div key={todo.datetime.toISOString()}>
          <p>{todo.title}</p>
          <p>{todo.datetime.toISOString()}</p>
          <p>{todo.done ? 'done' : 'undone'}</p>
        </div>
      ))
    }
  </div>
)

export default TodoList;
