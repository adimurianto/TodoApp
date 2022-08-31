import * as React from "react";
import {useSelector, useDispatch} from "react-redux";

import AddTodoForm from "../AddTodoForm";
import {} from "../../features/Todo/actions";

export default function Todo() {
    let todoList = useSelector(state => state.todo);
    let dispatch = useDispatch();

    return (
        <div style={{width: '40vw', margin: '2vh 30vw', backgroundColor: '#f2f2f2', padding: '2%', borderRadius: '7px'}}>
            <center>
                <h2>TODO APP</h2><br/>
            </center>
            <AddTodoForm/>

            <div style={{marginTop: '2rem'}}>
                <center>
                    <hr/><hr/>
                    <h3>Todo List</h3>
                    <hr/><hr/>
                </center><br/>  
                {todoList.map((todo, index) => {
                    return (
                        <div>
                            <h4>
                                {todo.description}
                            </h4><hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}