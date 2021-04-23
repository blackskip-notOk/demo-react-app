export const getTodos = state => {
    return state.additions.todos
};

export const getActive = (state, ownProps) => {
    return ownProps.filter === state.additions.visibilityFilter
};
