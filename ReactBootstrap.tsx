import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function ReactBootstrap() {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default ReactBootstrap;
