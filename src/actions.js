import * as actions from './actionTypes';

// export function bugAdded (description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1"
//     }
//   }

// }

// alternate syntax using arrow functions 
export const bugAdded = description => ({
  type: actions.BUG_ADDED,
      payload: {
        description: description
      }
})

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id
  }
})