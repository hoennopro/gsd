import React from "react";
import { Table } from "react-bootstrap";

const UsersTable = () => {
  const usersData = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      gender: "Nam",
      birthday: "01/01/1990",
      address: "Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@example.com",
      gender: "Nữ",
      birthday: "02/02/1995",
      address: "TP. Hồ Chí Minh",
    },
    {
      id: 3,
      name: "Pham Van C",
      email: "phamvanc@example.com",
      gender: "Nam",
      birthday: "03/03/1992",
      address: "Đà Nẵng",
    },
    {
      id: 4,
      name: "Lê Thị D",
      email: "lethid@example.com",
      gender: "Nữ",
      birthday: "04/04/1993",
      address: "Hải Phòng",
    },
    {
      id: 5,
      name: "Nguyễn Văn E",
      email: "nguyenvane@example.com",
      gender: "Nam",
      birthday: "05/05/1991",
      address: "Cần Thơ",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Danh sách người dùng</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.birthday}</td>
              <td>{user.address}</td>
              <td>
                {/* Add action buttons or links here */}
                <Button variant="primary" size="sm">
                  Sửa
                </Button>
                <Button variant="danger" size="sm">
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
