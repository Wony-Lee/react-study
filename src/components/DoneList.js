import { useSelector } from "react-redux";

const DoneList = () => {
    const list = useSelector((state) => state.todo.list).filter(
        (item) => item.done
    );
    return (
        <section>
            {list.length > 0 && <h1>완료 목록</h1>}
            <ul>
                {list.map((v) => (
                    <li key={v.id}>{v.text}</li>
                ))}
            </ul>
        </section>
    );
};

export default DoneList;
