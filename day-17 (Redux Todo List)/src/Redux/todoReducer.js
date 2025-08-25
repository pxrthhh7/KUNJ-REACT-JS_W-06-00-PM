const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }]
            }

        case 'REMOVE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter((_, i) => i !== action.payload)]
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((e, i) => (i === action.payload ? { ...e, completed: !e.completed } : e))
            }

        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map((e,i) => (i === action.payload.index) ? { ...e, text: action.payload.newtext} : e)
            }

        default:
            return state;
    }
}

export default todoReducer
