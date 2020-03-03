import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, USER_INFO } from '../types/counter'

export default handleActions({
    [INCREMENT] (state) {
        return {
            ...state,
            num: state.num + 1
        }
    },
    [DECREMENT] (state) {
        return {
            ...state,
            num: state.num - 1
        }
    },
    [ASYNC_INCREMENT] (state, action) {
        return {
            ...state,
            asyncNum: state.asyncNum + action.payload
        }
    },

    [USER_INFO] (state, action) {
        // console.log(state, action);
        return {
            ...state,
            userInfo: action.payload
        }
    },
}, {
    num: 0,
    asyncNum: 0,

    userInfo: {},
})