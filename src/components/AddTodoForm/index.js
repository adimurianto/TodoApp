import React, { useState } from "react";

import {useDispatch} from "react-redux";
import {addTodo} from "../../features/Todo/actions";

import './style.css';

export default function AddTodoForm() {
    let dispatch = useDispatch();

    const [description, setDesc] = useState(" ");
    const handleInput = event => {
        setDesc(event.target.value);
    };

    return (
        <div className="form_todo">
            <input className="description" type="text" onChange={handleInput} placeholder="Write Todo"/>
            <button className="btn_add" onClick={_ => dispatch(addTodo(description))}>+ Add</button>
        </div>
    );
}