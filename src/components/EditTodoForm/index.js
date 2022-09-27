import React, { useRef, useState } from "react";

import {useDispatch} from "react-redux";
import {editTodo} from "../../features/Todo/actions";

import './style.css';

export default function EditTodoForm() {
    let dispatch = useDispatch();

    const descRef = useRef(null);
    const [description, setDesc] = useState(" ");
    const handleInput = event => {
        setDesc(event.target.value);
    };

    const handleEdit = () => {
        // dispatch(editTodo(id, description));
        descRef.current.value = "";
        setDesc("");
    }

    return (
        <div className="form_todo">
            <input className="description" ref={descRef} type="text" onChange={handleInput} placeholder="Write Todo"/>
            <button className="btn_update" onClick={handleEdit}>Update</button>
        </div>
    );
}