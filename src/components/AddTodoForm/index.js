import React, { useRef, useState } from "react";

import {useDispatch} from "react-redux";
import {addTodo} from "../../features/Todo/actions";

import './style.css';

export default function AddTodoForm() {
    let dispatch = useDispatch();

    const descRef = useRef(null);
    const [description, setDesc] = useState(" ");
    const handleInput = event => {
        setDesc(event.target.value);
    };

    const handleAdd = () => {
        dispatch(addTodo(description));
        descRef.current.value = "";
        setDesc("");
    }

    return (
        <div className="form_todo">
            <input className="description" ref={descRef} type="text" onChange={handleInput} placeholder="Write Todo"/>
            <button className="btn_add" onClick={handleAdd}>+ Add</button>
        </div>
    );
}