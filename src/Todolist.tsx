import React from "react";
import {Button} from "./Button";

type PropsType = {
    title: string;
    tasks: TaskType[];


}

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}



export const Todolist = ({title, tasks}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input placeholder="date of birth" type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                <li><input placeholder="email" type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input placeholder="password" type="checkbox" checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}