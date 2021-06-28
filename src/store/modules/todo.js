// 타입 지정
const CREATE_TODO = "todo/CREATE";
const DONE = "todo/DONE";

export function create(payload) {
    return {
        type: CREATE_TODO,
        payload,
    };
}

export function done(key) {
    return {
        type: DONE,
        key,
    };
}

// 초기 상태
const initState = {
    list: [
        {
            id: 0,
            text: "코딩 하기",
            done: true,
        },
    ],
};

export default function todo(state = initState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    text: action.payload.text,
                    done: false,
                }),
            };
        case DONE:
            return {
                ...state,
                list: state.list.map((v) => {
                    return v.id === action.id ? { ...v, done: true } : v;
                }),
            };
        default:
            return state;
    }
}
