import { DECREMENT, defaultCounter, INCREMENT } from "../types/types";

const initialState: defaultCounter = {
  counter: 1,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export const inc = () => ({ type: INCREMENT });
export const dec = () => ({ type: DECREMENT });

export default reducer;
