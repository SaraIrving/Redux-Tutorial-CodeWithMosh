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
const bugAdded = description => ({
  type: actions.BUG_ADDED,
      payload: {
        description: "Bug1"
      }
})