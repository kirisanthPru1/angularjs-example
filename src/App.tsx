import React, { useState } from 'react';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== '') {
            setTodos([...todos, { title: newTodo.trim(), completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form className="todo-form" onSubmit={addTodo}>
                    <input className="new-todo" placeholder="What needs to be done?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                </form>
            </header>
            <section className="main">
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <li key={index} className={todo.completed ? 'completed' : ''}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                                <label>{todo.title}</label>
                                <button className="destroy" onClick={() => removeTodo(index)}></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default TodoApp;
