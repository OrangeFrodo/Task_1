// Create reducer for search
export const reducer = (state = "", action) => {
    switch (action.type) {
        case "ADD_TO_SEARCH":
            return action.payload
        default:
            return state
    }
}