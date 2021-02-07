import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { todolist } from './todolist.reducer';

const rootReducer = combineReducers({
    todolist,
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;