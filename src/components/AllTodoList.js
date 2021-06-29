import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

const AllTodoList = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.list).filter(
        (item) => !item.done
    );
    let count = 2;
    // const todoDone = useSelector((state) => state.todo.list).filter(
    //     (item) => !item.done
    // );
    // const id = useSelector((state) => state.todo.list).length;
    const [text, setText] = useState("");
    const [openToggle, setOpenToggle] = useState(false);
    const toggleHandler = useCallback(() => {
        setOpenToggle((prev) => !prev);
        dispatch({});
    });
    const onChangeValue = useCallback((e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }, []);

    const onClickAddItem = useCallback(() => {
        dispatch(
            create({
                id: count++,
                text: text,
            })
        );
        console.log(count);
    }, [count]);

    // const inputValue = useRef();
    // const onChangeText = () => {
    //     dispatch(
    //         create({
    //             id: list.length,
    //             text: text,
    //         })
    //     );
    //     console.log(list.length);
    //     console.log(inputValue.current.value);
    // };
    const onSuccess = useCallback((e) => {
        dispatch(
            done({
                id: e.currentTarget,
                done: true,
            })
        );
        console.log(count);
    }, []);
    return (
        <section>
            <h1>Todo List</h1>
            <div>
                <input type="text" value={text} onChange={onChangeValue} />
                <button onClick={onClickAddItem}>등록</button>
            </div>
            <ul>
                {list.map((v) => (
                    <li key={v.id}>
                        {v.text}
                        <input type="checkbox" onChange={toggleHandler} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AllTodoList;
