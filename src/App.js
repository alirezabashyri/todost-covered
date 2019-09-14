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
            Made with ❤️ by <a href="http://quentincolus.com">Alireza </a>
          </h4>
        </footer>
      </Container>
    </Body>
  );
}

export default App;
