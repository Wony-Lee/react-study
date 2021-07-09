import Profile from "./Profile";
import Board from "./Board";
import ListContainer from "./components/ListContainer";
import { Route } from "react-router-dom";
import OneItem from "./components/one";
import { MenuList } from "./style/styled";

const App = () => {
    return (
        <>
            <MenuList>
                <ul>
                    <li>
                        <a href="/">홈</a>
                    </li>
                    <li>
                        <a href="profile">프로필</a>
                    </li>
                    <li>
                        <a href="board">게시판</a>
                    </li>
                    <li>
                        <a href="todo">할 일</a>
                    </li>
                    <li>
                        <a href="oneItem">sample1</a>
                    </li>
                </ul>
            </MenuList>
            <Route path="/profile" component={Profile} />
            <Route path="/board" component={Board} />
            <Route path="/todo" component={ListContainer} />
            <Route path="/oneItem" component={OneItem} />
        </>
    );
};

export default App;
