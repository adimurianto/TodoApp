import React, { useRef, useState } from "react";

import {useDispatch} from "react-redux";
import {updateTodo} from "../../features/Todo/actions";

import './style.css';

export default function EditTodoForm(props) {
    let dispatch = useDispatch();

    const descRef = useRef(null);
    const [description, setDesc] = useState(props.desc);
    const [id, setId] = useState(props.id);

    const handleInput = event => {
        setDesc(event.target.value);
    };

    const handleEdit = () => {
        dispatch(updateTodo(id, description));
        descRef.current.value = "";
        setDesc("");
        props.cancelChange();
    }

    return (
        <div className="form_todo">
            <input className="description" ref={descRef} type="text" onChange={handleInput} placeholder="Write Todo" value={description}/>
            <button className="btn_update" onClick={handleEdit}>Update</button>
            <button className="btn_cancel" onClick={props.cancelChange}>Cancel</button>
        </div>
    );
}