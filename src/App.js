import Profile from "./Profile";
import Board from "./Board";

import { Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <nav>
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
                </ul>
            </nav>
            <Route path="/profile" component={Profile} />
            <Route path="/board" component={Board} />
            <h1>Hello React</h1>
        </>
    );
};

export default App;
