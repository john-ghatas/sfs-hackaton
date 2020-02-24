import { CHANGE_LANGUAGE } from "../../constants";
import { NL } from "../../../helpers/constants/languages";

const initialState = {
  current: NL
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, current: action.language };

    default:
      return state;
  }
};

export default languageReducer;
