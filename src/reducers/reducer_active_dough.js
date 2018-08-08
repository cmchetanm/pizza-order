const initialAction = {
  type: null
}

export default function(state = null, action = initialAction) {
  switch (action.type) {
    case "DOUGH_SELECTED":
      return action.payload;
    default:
      return state
  }
}
