import Button from "react-bootstrap/Button";

const ButtonComponent = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick}>
      Primary
    </Button>
  );
};

export default ButtonComponent;
