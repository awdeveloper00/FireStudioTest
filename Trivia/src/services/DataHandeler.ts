import {BASE_URL} from '../Api/apilinks';

interface ApiProp {
  amount: string;
  value: string;
}
export const fetchQuestionsData = async (data: ApiProp) => {
  return fetch(
    BASE_URL + `/api.php?amount=${data.amount}&${data.value}=easy&type=boolean`,
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};
