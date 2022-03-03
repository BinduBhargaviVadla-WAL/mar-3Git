import { useContext, useRef } from "react";
import TodoContext from "./TodoContext";
const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
    const reducerValue = useContext(TodoContext);
    return (
        <div>
            <div className="list">
            <ul>
                {reducerValue.state.map((val, index) => {
                    if (val.item == "") {
                        return (<div></div>)
                    }
                    return (
                        <ul>
                            <li className="liWidth">{val.item}</li>
                            <li className="liWidth">{val.status}</li>
                            <li><button
                                onClick={(event) => {
                                    event.preventDefault();
                                    dispatch({ type: "deleteIndex", index })
                                }}>Delete</button></li>
                        </ul>
                    )
                })}
            </ul>
            </div>
        </div>
    )
}
export default TodoList;