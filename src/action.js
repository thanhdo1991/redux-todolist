export const ADD_TODO = 'ADD_TODO'
export const TOOGLE_TODO = 'TOOGLE_TODO'

let idNext = 0

export function addItem(text) {
  return {
    type: ADD_TODO,
    id: idNext++,
    text
  }
}

export function toggleComplete(id) {
  return {
    type: TOOGLE_TODO,
    id
  }
}
