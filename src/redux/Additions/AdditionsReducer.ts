import { updateObjectInArray } from "../../utils/object-helpers";
import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER,
    TOOGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../Actions/actionsTypes";

type TodoType = {
    id: number
    text: string
    completed: boolean
}
const initialState = {
    todos: [
        {id: 0, text: '', completed: false},
        {id: 1, text: '/profile', completed: false},
    ] as Array<TodoType>,
    visibilityFilter: SHOW_ALL as any,
};

type InitialStateType = typeof initialState

//reducer
const additionsReducer = (state = initialState, action: any): InitialStateType => {
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
                // todos: updateObjectInArray(state.todos, action.todoId, 'id', {completed: !state.todos.completed})
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
type AddTodoActionType = {
    type: typeof ADD_TODO
    id: number
    text: string
}
export const addTodo = (text: string): AddTodoActionType => ({type: ADD_TODO, id: todoId++, text})

type RemoveTodoActionType = {
    type: typeof REMOVE_TODO
    todoId: number
}
export const removeTodo = (todoId: number): RemoveTodoActionType => ({type: REMOVE_TODO, todoId})

type ToggleTodoActionType = {
    type: typeof TOOGLE_TODO
    todoId: number
}
export const toggleTodo = (todoId: number): ToggleTodoActionType => ({type: TOOGLE_TODO, todoId})

type SetVisibilityFilterActionType = {
    type: typeof SET_VISIBILITY_FILTER
    filter: any
}
export const setVisibilityFilter = (filter: any): SetVisibilityFilterActionType => ({type: SET_VISIBILITY_FILTER, filter})

type GetAllTodosActionType = {
    type: typeof SHOW_ALL
}
export const getAllTodos = (): GetAllTodosActionType => ({type: SHOW_ALL})

type GetActiveTodosActionType = {
    type: typeof SHOW_ACTIVE
}
export const getActiveTodos = (): GetActiveTodosActionType => ({type: SHOW_ACTIVE})

type GetCompletedTodosActionType = {
    type: typeof SHOW_COMPLETED
}
export const getCompletedTodos = (): GetCompletedTodosActionType => ({type: SHOW_COMPLETED})
//thunk creator
export const getVisibility = (filter: any) => (dispatch: any) => {
    dispatch(setVisibilityFilter(filter));

};

export default additionsReducer;