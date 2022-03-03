import { useContext, useRef } from "react";
import TodoContext from "./TodoContext";
const TodoForm = () => {
    const refDefaultValue = null;
    const inputRef = useRef(refDefaultValue);
    const selectRef = useRef(refDefaultValue);
    const { dispatch } = useContext(TodoContext);
    const reducerValue = useContext(TodoContext);
    return (
        <div>
             <h1>Todos</h1>
            <input ref={inputRef} type="text" name="item" placeholder="Enter Todo item"/>
            <select ref={selectRef} name="status">
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <br />
            <button className="prime_btn" onClick={() => {
                dispatch({ type: "add", item: inputRef.current.value, status: selectRef.current.value })
            }}>Add hobby</button>
            <button className="del_btn"
                onClick={() => {
                    dispatch({ type: "clearAll" })
                }}>Clear All</button>
        </div>
    );
}
export default TodoForm;