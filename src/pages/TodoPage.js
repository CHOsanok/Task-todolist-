import React, { useEffect, useState } from "react";
import TodoBoard from "../components/TodoBoard";
import api from "../utils/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ModalButton from "../components/ModalButton";

const TodoPage = ({ user, setUser }) => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const getTasks = async () => {
    const response = await api.get("/tasks");
    const addList = [];

    for (let i = 0; i < response.data.data.length; i++) {
      if (response.data.data[i].author.email === user.email) {
        addList.push(response.data.data[i]);
      }
      setTodoList(addList);
    }
  };

  const addTasks = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });

      setTodoValue("");
      getTasks();

      if (!response.status === 200) throw new Error("task can not be added");
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <div className="userInfo">
        <ModalButton item={"로그아웃"} setUser={setUser} />
        <ModalButton item={"회원탈퇴"} setUser={setUser} />
      </div>

      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTasks}>
            추가
          </button>
        </Col>
      </Row>

      <TodoBoard user={user} todoList={todoList} getTasks={getTasks} />
    </Container>
  );
};

export default TodoPage;
