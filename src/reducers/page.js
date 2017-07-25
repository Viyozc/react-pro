import assign from 'lodash/assign'

let pageReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE':
      return assign(state, {data: action.payload})
  }
  return state
}

export {
  pageReducer
}
