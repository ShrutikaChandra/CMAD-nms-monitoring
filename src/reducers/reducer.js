function rootReducer(state = {
    logs: [],
    count: []
}, action) {
    switch (action.type) {
        case 'grid':
            return {
                logs: action.logs,
                count: state.count
            }
        case 'dashboard':
            return {
                logs: state.logs,
                count: action.count
            }
        default:
            return state;
    }
}

export default rootReducer;