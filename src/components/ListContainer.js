import AllTodoList from "./AllTodoList";
import DoneList from "./DoneList";

import { Container } from "../style/styled";

const ListContainer = () => {
    return (
        <>
            <Container>
                <AllTodoList />
                <DoneList />
            </Container>
        </>
    );
};
export default ListContainer;
