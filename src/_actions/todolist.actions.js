import { todolistConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const todolistActions = {
  ToDoList,
};

function ToDoList( lists) { 
  return (dispatch) => {
    dispatch(request(lists));

    userService.ToDoList(lists).then(
      (lists) => {
        dispatch(success());
        history.push('/');
        dispatch(alertActions.success('List successful'));
      },
      (error) => { 
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(lists) {
    return { type: todolistConstants.LIST_REQUEST, lists };
  }
  function success(lists) {
    return { type: todolistConstants.LIST_SUCCESS, lists };
  }
  function failure(error) {
    return { type: todolistConstants.LIST_FAILURE, lists };
  }
}
 