import React from "react";
import { Button } from "react-bootstrap";

const Buttons = () => {
  return (
    <div className="d-flex justify-content-between">
      <Button variant="primary">Lưu</Button>
      <Button variant="secondary">Hủy</Button>
      <Button variant="success">Thành công</Button>
      <Button variant="warning">Cảnh báo</Button>
      <Button variant="danger">Báo lỗi</Button>
      <Button variant="info">Thông tin</Button>
      <Button variant="light">Đường dẫn</Button>
    </div>
  );
};

export default Buttons;
