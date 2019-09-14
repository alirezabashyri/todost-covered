import React from "react";
import "./App.css";

import {
  Body,
  Container,
  Today,
  AddTodoItem,
  Logo,
  TodoList
} from "./components";

function App() {
  return (
    <Body>
      <Logo />
      <Container className="container">
        <Today />
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
            <AddTodoItem />
            <TodoList />
          </div>
        </div>
        <footer>
          <h4>
            Covered with ❤️ by <a href="http://alirezabashiri.com">Alireza </a>
            <p></p>
            Thanks to{" "}
            <a href="https://codepen.io/Quentincls/pen/bvBrpo">Quentin </a> for
            both design and functionality.
          </h4>
        </footer>
      </Container>
    </Body>
  );
}

export default App;
