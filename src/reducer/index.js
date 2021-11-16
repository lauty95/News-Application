import { GET_NEWS } from "../components/actions/constants";
const initialState = {
    news: []
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_NEWS:
            return {
                ...state,
                news: payload
            }
        default:
            return state
    }
}

export default reducer;