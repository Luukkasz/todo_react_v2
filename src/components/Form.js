import React from 'react';

function Form({setInputText, inputText, setTodos, setStatus}) {

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            setTodos(prevState => [
                ...prevState,
                {
                    id: Math.random() * 1000,
                    text: inputText,
                    completed: false,
                }
            ])

            setInputText('');
        }

    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-input__wrapper">
                <input
                    onChange={handleChange}
                    value={inputText}
                    type="text"
                    className="todo-input"/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;