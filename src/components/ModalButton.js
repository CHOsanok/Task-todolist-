import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../utils/api";

const ModalButton = ({ item, setUser }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [contenText, setContenText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (item === "로그아웃") {
      setTitle("로그아웃");
      setContenText("로그아웃 하시겠습니까?");
    } else {
      setTitle("회원탈퇴");
      setContenText("회원탈퇴 하시겠습니까?");
    }

    setShow(true);
  };
  const handleOk = () => {
    if (item === "로그아웃") {
      deleteToken();
    } else {
      memberRemoval();
    }
    setUser(null);
  };

  const deleteToken = () => {
    sessionStorage.removeItem("token");
  };
  const memberRemoval = async () => {
    await api.delete("/user/deleteId");
  };
  return (
    <>
      <Button className="button-primary" onClick={handleShow}>
        {item}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contenText}</Modal.Body>
        <Modal.Footer>
          <Button className="button-primary" onClick={handleClose}>
            취소
          </Button>
          <Button className="button-primary" onClick={handleOk}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalButton;
