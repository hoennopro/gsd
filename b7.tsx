import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Toasts = () => {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ToastContainer position="top-right" className="p-3">
        <Toast show={show} onClose={handleClose}>
          <Toast.Header closeButton>
            <Toast.Title>Cảnh báo</Toast.Title>
          </Toast.Header>
          <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
        </Toast>
      </ToastContainer>

      <button onClick={handleShow}>Hiển thị thông báo</button>
    </div>
  );
};

export default Toasts;
