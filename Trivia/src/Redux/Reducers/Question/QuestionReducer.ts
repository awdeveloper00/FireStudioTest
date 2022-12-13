const initialState={questions:[]}
interface QuestionAction{
    type:'GET_QUESTION',
    payload:[]
}
const QuestionReducer = (state:any= initialState, action:QuestionAction) => {
    switch (action.type) {
      case 'GET_QUESTION':
        return {...state, questions: action.payload};
      default:
        return state;
    }
  };
  export default QuestionReducer;