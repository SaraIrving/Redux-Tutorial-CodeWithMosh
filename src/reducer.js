let lastId = 0;

//set the initial state using a default argument
function reducer(state = [], action) {
  if(action.type === "bugAdded") {
    return [
      ...state, 
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
  } else if (action.type =="bugRemoved") {
    return state.filter(bug => bug.id !== bug.payload.id)
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




 
