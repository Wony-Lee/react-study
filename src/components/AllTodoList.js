import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

const AllTodoList = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.list).filter(
        (item) => !item.done
    );
    const inputValue = useRef();

    const onChangeText = () => {
        dispatch(
            create({
                id: list.length,
                text: inputValue.current.value,
            })
        );
        console.log(list.length);
        console.log(inputValue.current.value);
    };
    const onSuccess = () => {
        dispatch(
            done({
                id: list.length[-1],
                done: true,
            })
        );
        console.log(list.length);
    };
    return (
        <section>
            <h1>Todo List</h1>
            <div>
                <input type="text" ref={inputValue} />
                <button onClick={onChangeText}>등록</button>
            </div>
            <ul>
                {list.map((v) => (
                    <li key={v.id}>
                        {v.text}
                        <button onClick={onSuccess}>완료</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AllTodoList;
