import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Dropdowns = () => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="secondary"
        id="dropdown-basic-secondary"
        title="Secondary dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="success"
        id="dropdown-basic-success"
        title="Success dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="warning"
        id="dropdown-basic-warning"
        title="Warning dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="danger"
        id="dropdown-basic-danger"
        title="Danger dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="info"
        id="dropdown-basic-info"
        title="Info dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="light"
        id="dropdown-basic-light"
        title="Light dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        variant="dark"
        id="dropdown-basic-dark"
        title="Dark dropdown"
      >
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Dropdowns;
