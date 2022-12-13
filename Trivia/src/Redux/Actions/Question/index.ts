import {fetchQuestionsData} from '../../../services/DataHandeler';
import {Dispatch} from 'redux';
interface ActionProp {
  amount: string;
  value: string;
}
export const getAllQuestionsAction =
  (data: ActionProp) => async (dispatch: Dispatch) => {
    try {
      const res = await fetchQuestionsData(data);
      if (res.response_code == 0) {
        dispatch({type: 'GET_QUESTION', payload: res.results});
        return res;
      }
    } catch (error) {
      return console.log(error);
    }
  };
