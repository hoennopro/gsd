import React from "react";
import { Alert } from "react-bootstrap";

const Alerts = () => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Thêm tài khoản thành công!</Alert.Heading>
        <p>Tài khoản của bạn đã được tạo thành công.</p>
      </Alert>

      <Alert variant="danger">
        <Alert.Heading>Thêm mới tài khoản thất bại!</Alert.Heading>
        <p>Có lỗi xảy ra trong quá trình tạo tài khoản.</p>
      </Alert>

      <Alert variant="warning">
        <Alert.Heading>Tên không được để trống!</Alert.Heading>
        <p>Vui lòng nhập tên của tài khoản.</p>
      </Alert>
    </div>
  );
};

export default Alerts;
