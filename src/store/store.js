import { createStore, combineReducers } from 'redux'
import { reducer } from "../actions/search"

// Create rootReducer for store
const rootReducer = combineReducers({
    search: reducer
})

// Create store
export const store = createStore(rootReducer)