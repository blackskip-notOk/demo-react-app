import { updateObjectInArray } from "../../utils/object-helpers";
import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER,
    TOOGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../Actions/actionsTypes";

let initialState = {
    todos: [
        {id: 0, text: '', completed: false},
        {id: 1, text: '/profile', completed: false},
    ],
    visibilityFilter: SHOW_ALL,
};

//reducer
const additionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: action.id,
                text: action.text,
                completed: false
            };
            return  {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.todoId)
            }
        case TOOGLE_TODO:
            return {
                ...state,
                todos: updateObjectInArray(state.todos, action.todoId, 'id', {completed: !state.todos.completed})
            }
// const visibilityReducer = (state = SHOW_ALL, action) => {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
        }
// export const getVisibleTodos = (state = [], action={type: SHOW_ALL}) => {
        case SHOW_ALL:
            return state
        case SHOW_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(t => t.completed)
            }
        case SHOW_ACTIVE:
            return {
                ...state,
                todos: state.todos.filter(t => !t.completed)
            }
        default:
            return state
            // throw new Error(`Unknow filter ${action.filter}`)
    }
}

//action creator:
let todoId = 0;
export const addTodo = text => ({type: ADD_TODO, id: todoId++, text});
export const removeTodo = todoId => ({type: REMOVE_TODO, todoId});
export const toggleTodo = todoId => ({type: TOOGLE_TODO, todoId});
export const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});
export const getAllTodos = () => ({type: SHOW_ALL});
export const getActiveTodos = () => ({type: SHOW_ACTIVE});
export const getCompletedTodos = () => ({type: SHOW_COMPLETED});
//thunk creator
export const getVisibility = (filter) => dispatch => {
    dispatch(setVisibilityFilter(filter));

};

export default additionsReducer;