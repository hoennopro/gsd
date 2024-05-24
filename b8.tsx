import React from "react";
import { Tab, Tabs, TabContainer } from "react-bootstrap";

const TabsComponent = () => {
  return (
    <div className="container">
      <TabContainer defaultActiveKey="home">
        <Tabs className="mb-3">
          <Tab eventKey="home" title="Trang chủ">
            <div className="tab-content p-3">
              <p>Đây là trang chủ</p>
              <img src="https://picsum.photos/200" alt="Hình ảnh trang chủ" />
            </div>
          </Tab>
          <Tab eventKey="profile" title="Giới thiệu">
            <div className="tab-content p-3">
              <p>Đây là trang giới thiệu</p>
              <p>Nội dung giới thiệu về website hoặc ứng dụng của bạn.</p>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Liên hệ">
            <div className="tab-content p-3">
              <p>Đây là trang liên hệ</p>
              <p>Thông tin liên hệ của bạn hoặc doanh nghiệp của bạn.</p>
            </div>
          </Tab>
        </Tabs>

        <TabContent>
          <TabPane eventKey="home">{/* Nội dung tab trang chủ */}</TabPane>
          <TabPane eventKey="profile">{/* Nội dung tab giới thiệu */}</TabPane>
          <TabPane eventKey="contact">{/* Nội dung tab liên hệ */}</TabPane>
        </TabContent>
      </TabContainer>
    </div>
  );
};

export default TabsComponent;
