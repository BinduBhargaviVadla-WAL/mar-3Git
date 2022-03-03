import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import TodoList from "./TodoList";

const TodoAppMainApp = () => {
    const initialValue = [];
    const [state,dispatch] = useReducer(TodoReducer,initialValue);
    const reducerValue = {state,dispatch};
    return (
        <TodoContext.Provider value={reducerValue}>
            <TodoForm/>
            <TodoList/>
        </TodoContext.Provider>
    )

}
export default TodoAppMainApp;