const SET_DATE_IN = "SET_DATE_IN";
const SET_CITY = "SET_CITY";
export const SET_LOGIN = "SET_LOGIN";

const initialState = {
    auth: false,
    login: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, auth: true, login: action.payload }

        default:
            return state;
    }

}