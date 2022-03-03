const TodoReducer = (state, action) => {
    console.log(state);
    console.log(action);
    if (action.type == "add") {
        if(action.item == ""){
            console.log("empty added");
            return state;
        }
        let ob = {
            item: action.item,
            status: action.status
        }
        return [...state, ob]
    }
    if (action.type == "clearAll") {
        return []
    }
    if (action.type == "deleteIndex") {
        return state.filter((val, index) => index != action.index)
    }

}
export default TodoReducer;