import * as React from "react";

import {useSelector, useDispatch} from "react-redux";

import AddTodoForm from "../AddTodoForm";
import { doneTodo, removeTodo } from "../../features/Todo/actions";
import './style.css';
import EditTodoForm from "../EditTodoForm";

export default function Todo() {
    let todoList = useSelector(state => state.todo);
    let dispatch = useDispatch();

    const [typeAct, setTypeAct] = React.useState("Add");
    const [idUpd, setIdUpd] = React.useState("");
    const [descUpd, setDescUpd] = React.useState("");

    const handleChangeTodo = (id, desc) => {
        setIdUpd(id);
        setDescUpd(desc);
        setTypeAct("Edit");
    };

    const handleCancelChangeTodo = () => {
        setIdUpd("");
        setDescUpd("");
        setTypeAct("Add");
    }

    const done = "&check;";
    const deleted = "&cross;";
    const edit = "Edit";

    return (
        <div className="frame-app">
            <center>
                <h2>TODO APP</h2><br/>
            </center>
            
            {
                (
                    typeAct == 'Add' ? 
                    <AddTodoForm/>
                    :
                    <EditTodoForm desc={descUpd} id={idUpd} cancelChange={handleCancelChangeTodo} />
                )
            }

            <div className="frame-body">
                <center>
                    <hr/><hr/>
                    <h3>Todo List</h3>
                    <hr/><hr/>
                </center><br/>  
                {todoList.map((todo, index) => {
                    return (
                        <div className="list-todo" key={todo.id}>
                            <div className="deskripsi">
                                <h4 dangerouslySetInnerHTML={{__html: todo.description}} />
                            </div>
                            
                            <div className={`action-opt ${(typeAct == 'Edit' ? 'hidden' : '')}`} >
                                <button 
                                    className={`btn-done ${(todo.status == 'done' ? 'hidden' : '')}`}
                                    aria-label="Done" 
                                    style={{color: 'green'}} 
                                    dangerouslySetInnerHTML={{__html: done}} 
                                    onClick={_ => dispatch(doneTodo(todo.id))}
                                />
                                
                                <button 
                                    className={`btn-edit ${(todo.status == 'done' ? 'hidden' : '')}`} 
                                    aria-label="Edit" 
                                    style={{color: 'blue'}} 
                                    dangerouslySetInnerHTML={{__html: edit}} 
                                    onClick={_ => handleChangeTodo(todo.id, todo.description)}
                                />

                                <button 
                                    className="btn-delete" 
                                    aria-label="Hapus" 
                                    style={{color: 'red'}} 
                                    dangerouslySetInnerHTML={{__html: deleted}} 
                                    onClick={_ => dispatch(removeTodo(todo.id))}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}