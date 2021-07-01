import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

const AllTodoList = () => {
    const list = useSelector((state) => state.todo.list).filter(
        (item) => !item.done
    );
    const inputValue = useRef();
    const dispatch = useDispatch();

    return (
        <section>
            <h1>Todo List</h1>
            <div>
                <input type="text" ref={inputValue} />
                <button
                    onClick={() => {
                        dispatch(
                            create({
                                id: list,
                                text: inputValue.current.value,
                            })
                        );
                    }}
                >
                    등록
                </button>
            </div>
            <ul>
                {list.map((v) => (
                    <li key={v.id}>
                        {v.text}
                        <button onClick={() => dispatch(done(v.id))}>
                            완료
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AllTodoList;
