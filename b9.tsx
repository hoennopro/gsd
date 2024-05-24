import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Đăng ký tài khoản</h2>

      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="Nhập email" />
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel>Mật khẩu</FormLabel>
          <FormControl type="password" placeholder="Nhập mật khẩu" />
        </FormGroup>

        <FormGroup controlId="formBasicName">
          <FormLabel>Họ và tên</FormLabel>
          <FormControl type="text" placeholder="Nhập họ và tên" />
        </FormGroup>

        <FormGroup controlId="formBasicAddress">
          <FormLabel>Địa chỉ</FormLabel>
          <FormControl type="text" placeholder="Nhập địa chỉ" />
        </FormGroup>

        <FormGroup controlId="formBasicCity">
          <FormLabel>Thành phố</FormLabel>
          <FormControl type="text" placeholder="Nhập thành phố" />
        </FormGroup>

        <FormGroup controlId="formBasicDistrict">
          <FormLabel>Quận</FormLabel>
          <FormControl type="text" placeholder="Nhập quận" />
        </FormGroup>

        <FormGroup controlId="formBasicPostalCode">
          <FormLabel>Mã bưu điện</FormLabel>
          <FormControl type="text" placeholder="Nhập mã bưu điện" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
