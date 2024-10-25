import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, getTasks }) => {
  const [revise, setRevise] = useState(false);
  const [task, setTask] = useState("");

  const handleDelete = async () => {
    await api.delete(`/tasks/${item._id}`);
    getTasks();
  };
  const handleIsComplete = async () => {
    await api.put(`/tasks/${item._id}`, { isComplete: !item.isComplete });
    getTasks();
  };
  const handleTask = async (task) => {
    await api.put(`/tasks/${item._id}`, { task: task });
    setRevise(!revise);
    getTasks();
  };

  return (
    <Row>
      <Col xs={12}>
        {revise ? (
          <div className={`todo-item ${item.isComplete ? "finish" : ""}`}>
            <input
              className="todo-content"
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              autoFocus
            ></input>

            <div>
              <button
                className="button-delete"
                onClick={() => {
                  handleTask(task);
                }}
              >
                완료
              </button>
              <button
                className="button-delete"
                onClick={() => setRevise(!revise)}
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          <div className={`todo-item ${item.isComplete ? "finish" : ""}`}>
            <div className="todo-content">{item.task}</div>
            <div>
              <button
                className="button-delete"
                onClick={() => setRevise(!revise)}
              >
                수정
              </button>
              <button className="button-delete" onClick={() => handleDelete()}>
                삭제
              </button>
              <button
                className="button-delete"
                onClick={() => handleIsComplete()}
              >
                {item.isComplete ? "취소" : "끝!!!"}
              </button>
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default TodoItem;
