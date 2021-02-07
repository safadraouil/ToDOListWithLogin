import { todolistConstants } from '../_constants';
import cloneDeep from 'lodash/cloneDeep';

 

export function todolist(state = {}, action) {
  
    const litemsists = action.list
    let newState = {} 
    switch (action.type) {
        case todolistConstants.LIST_REQUEST:
            console.log('999', action.lists)
      
          newState = cloneDeep({
                ...state
            });  
            console.log('922222299', state)
            //newState.lists = { ...newState.lists, ...action.lists }
            newState = { ...newState,  ...action.lists }
            return {
                newState
            };
        case todolistConstants.LIST_SUCCESS:
            newState = cloneDeep({
                ...state
            });
            newState.lists = { ...newState.lists, ...action.lists[0] }
           // newState.lists = action.lists[0]
          
                return {
                    newState
                };
        case todolistConstants.LIST_FAILURE: 
                    return {
                         error: action.error
                    };
       
        default:
            return state
    }
}