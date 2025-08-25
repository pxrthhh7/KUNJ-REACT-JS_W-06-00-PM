export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text
})
export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    payload: index
})
export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    payload: index
})
export const editTodo = (newtext, index) => ({
    type: 'EDIT_TODO',
    payload: {newtext , index}
})