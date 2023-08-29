import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  // React.useState is a 'hook' that lets us add some local stato to functional components
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout(user = null) {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user ? (
                <Link onClick={logout}> Logout User </Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={MoviesList}></Route>
        <Route exact path="/movies" component={MoviesList}></Route>
        <Route
          path="/movies/:id/review"
          component={AddReview}
          /*
          render={(props) => {
            <AddReview {...props} user={user}></AddReview>;
          }}
          */
        ></Route>
        <Route
          exact path="/movies/:id"
          component={Movie}
          /*
          render={(props) => {
            <Movie {...props} user={user}></Movie>;
          }}
          */
        ></Route>
        <Route
          path="/login"
          component={Login}
          /*
          render={(props) => {
            <Login {...props} login={login}></Login>;
          }}
          */
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
