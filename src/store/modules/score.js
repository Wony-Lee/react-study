const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

export function check({ index, answer }) {
    return {
        type: CHECK_CORRECT,
        payload: { index, answer },
    };
}

export function next() {
    return {
        type: NEXT_PAGE,
    };
}
export function reset() {
    return {
        type: RESET,
    };
}

const initialState = {
    score: 0,
    page: 0,
    quizs: {
        q: "대한민국의 수도는?",
        a: [
            {
                text: "서울",
                isCurrent: true,
            },
            {
                text: "부산",
                isCurrent: false,
            },
            {
                text: "광주",
                isCurrent: false,
            },
            {
                text: "인천",
                isCurrent: false,
            },
        ],
    },
};

export default function score(state = initialState, action) {
    switch (action.type) {
        case CHECK_CORRECT:
            return {
                ...state,
                score: state.quizs(action.payload.index).isCurrent
                    ? state.score + 10
                    : state.score,
            };
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        case RESET:
            return {
                ...state,
                score: 0,
                page: 0,
            };
        default:
            return state;
    }
}
