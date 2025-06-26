import { useState, useRef } from "react";

function Todo(){

    const [x, setX] = useState([]);

    const inputRef = useRef(null);

    function addTodo(){
        if(!inputRef.current.value == ""){
        const newTodoList = [...x, inputRef.current.value];
        setX(newTodoList);
        inputRef.current.value = "";}
        inputRef.current.focus();
    }
    return(
        <>
        <h1>Todo</h1>
        <label htmlFor="todo">Enter your Todo:
                <input type="text" name="todo" id="todo" ref={inputRef}/>
            </label>
        <button type="submit" id="button" onClick={addTodo}>Add</button>

        <ul>
            {
                x.map((todo, index) => <li key={index}>{todo}</li>)
            }
        </ul>
        </>
    )
}

export default Todo;