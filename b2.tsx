import React from "react";
import { FormControl } from "react-bootstrap";

const Inputs = () => {
  return (
    <div>
      <FormControl type="text" placeholder="Input cỡ lớn" size="lg" />
      <FormControl type="text" placeholder="Input cỡ trung bình" />
      <FormControl type="text" placeholder="Input cỡ bé" size="sm" />
    </div>
  );
};

export default Inputs;
