import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const getInfoFromLocalStorage = () => {
        if (localStorage.getItem('todos') === null) return [];
        const todoLocal = JSON.parse(localStorage.getItem('todos'));
        return todoLocal;
    };

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState(getInfoFromLocalStorage());
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])


    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };


    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
