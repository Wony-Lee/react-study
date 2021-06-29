// 타입 지정
const CREATE_TODO = "todo/CREATE";
const DONE = "todo/DONE";
const REMOVE = "todo/REMOVE";

export function create({ id, text }) {
    return {
        type: CREATE_TODO,
        payload: {
            id,
            text,
        },
    };
}

export function done({ id }) {
    return {
        type: DONE,
        id: id,
    };
}

export function remove() {
    return {
        type: REMOVE,
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
        {
            id: 1,
            text: "숨 쉬기",
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
                    return v.id === action.id ? { ...v, done: !v.done } : v;
                }),
            };
        case REMOVE:
            return {
                ...state,
                list: state.list.filter((v) => v.id !== action.id),
            };
        default:
            return state;
    }
}
