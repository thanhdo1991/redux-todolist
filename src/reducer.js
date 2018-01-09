import {
  ADD_TODO,
  TOOGLE_TODO
} from './action'

const initVar = []

function reducer(state = initVar, action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {id: action.id, text: action.text, completed: true}]
    case TOOGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, completed: !action.completed}
        : todo
      )
    default:
      return state
  }
}

export default reducer
