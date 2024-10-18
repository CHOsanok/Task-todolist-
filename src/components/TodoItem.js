import React from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, getTask }) => {
  const hasDelete = async () => {
    await api.delete(`/tasks/${item._id}`);
    getTask();
  };
  const hasIsComplete = async () => {
    await api.put(`/tasks/${item._id}`, { isComplete: !item.isComplete });
    getTask();
  };

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "finish" : ""}`}>
          <div className="todo-content">{item.task}</div>
          <div>
            <button className="button-delete" onClick={() => hasDelete()}>
              삭제
            </button>
            <button className="button-delete" onClick={() => hasIsComplete()}>
              {item.isComplete ? "끝내지 못했다" : "끝!!!"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
