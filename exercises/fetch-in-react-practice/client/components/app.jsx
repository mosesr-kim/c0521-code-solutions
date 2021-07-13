import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos }));
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    const postHeaders = new Headers();
    postHeaders.append('Content-Type', 'application/json');
    const postBodyStringed = JSON.stringify(newTodo);
    const postInit = { method: 'POST', headers: postHeaders, body: postBodyStringed };
    fetch('/api/todos', postInit)
      .then(res => res.json())
      .then(todo => {
        const todosArray = this.state.todos.concat();
        todosArray.push(todo);
        this.setState({ todos: todosArray });
      });
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const todosArray = this.state.todos.concat();
    const toggledTodo = todosArray.filter(todo => todo.todoId === todoId);
    const index = todosArray.findIndex(todo => todo.todoId === todoId);
    const patchBody = toggledTodo[0].isCompleted ? { isCompleted: false } : { isCompleted: true };
    const patchHeaders = new Headers();
    patchHeaders.append('Content-Type', 'application/json');
    const patchBodyStringed = JSON.stringify(patchBody);
    const patchInit = { method: 'PATCH', headers: patchHeaders, body: patchBodyStringed };
    fetch(`/api/todos/${todoId}`, patchInit)
      .then(res => res.json())
      .then(newTodo => {
        todosArray.splice(index, 1, newTodo);
        this.setState({ todos: todosArray });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
