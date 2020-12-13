// REDUCERS are pure functions, they always return the same results given the same arguments, they have no side effects and they depend on nothing outside of their scope

//import { BUG_REMOVED, BUG_ADDEd } from './actionTypes';
import * as actions from './actionTypes';

let lastId = 0;

//set the initial state using a default argument
export default function reducer(state = [], action) {
  if(action.type === actions.BUG_ADDED) {
    return [
      ...state, 
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    console.log("In bug removed!")
    return state.filter(bug => bug.id !== action.payload.id)
  } else if (action.type === actions.BUG_RESOLVED) {
    console.log("In bug resolved!!")
    const stateCopy = [...state]
    stateCopy.forEach(bug => {
      if(bug.description === action.payload.description) {
        bug.resolved = true;
      }
    })
    console.log('stateCopy = ', stateCopy)
    return stateCopy;
  }

  //  // could also implement with switch/case instead of if/else
  //  switch(action.type) {
  //   case "bugAdded" : return [
  //     ...state, 
  //     {
  //       id: ++lastId,
  //       description: action.payload.description,
  //       resolved: false
  //     }
  //   ];
  //     case "bugRemoved": return state.filter(bug => bug.id !== bug.payload.id);
  //     default: return state;
  // }

   //always return current state as default in case you pass an action that doesn't exist, this way it will not cause issues 
   return state;
}




 

