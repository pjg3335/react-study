import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/minsu123?name=kimminsu&rank=1">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/about/:id"
            /*
              component속성으로 넘기면 useRouter안써도 param넘어감
            */
            // component={About}
          >
            <About />
          </Route>
          <Route
            path="/users"
            /*
              이 옵션을 주면 정확히 /users 일떄만 동작한다.
              /users/ => 동작함
              /users?id=123 => 동작함
              /users/a => 동작안함
            */
            exact={true}
          >
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

/* 
  param 받으려면 withRouter사용해야함
  안쓰고 하려면 <Route>에 component속성으로 넘길 것

  query string은 별 장치없이도 그냥도 받을 수 있다.
*/
const About = withRouter((props) => {
  const { id } = props.match.params;
  const queryString = props.location.search;
  const urlParams = new URLSearchParams(props.location.search);

  console.log(props);

  return (
    <>
      <h2>About</h2>
      <div>param.match.id: {id}</div>
      <div>query string: {queryString}</div>
      <br />
      <div>name: {urlParams.get("name")}</div>
      <div>rank: {urlParams.get("rank")}</div>
    </>
  );
});

function Users() {
  return <h2>Users</h2>;
}
