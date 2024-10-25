import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === secPassword) {
        await api.post("/user", { name, email, password });
        navigate("/login");
      } else {
        throw new Error("비밀번호가 일치 하지 않습니다.");
      }
    } catch (err) {
      if (err.error) {
        setError(err.error);
      } else {
        setError("비밀번호가 일치 하지 않습니다.");
      }
    }
  };
  const cancellBtn = () => {
    navigate("/login");
  };

  return (
    <div className="display-center">
      {error && <div>{error}</div>}
      <Form className="login-box" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            required={true}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required={true}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required={true}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSecPassword">
          <Form.Label>re-enter the password</Form.Label>
          <Form.Control
            type="password"
            required={true}
            placeholder="re-enter the password"
            onChange={(e) => setSecPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="button-primary" type="submit">
          회원가입
        </Button>
        <Button className="button-primary" onClick={cancellBtn}>
          취소
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
