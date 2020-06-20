const numberReducer = function(state, action){
    switch(action.type){
     case 'increment':
         return state+1;
     case 'decrement':
        return state-1;
     case 'step':
         return state+action.num }
}
export default numberReducer