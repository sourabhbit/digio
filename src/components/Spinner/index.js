import { Spinner } from "react-bootstrap";
import "./style.css";

export default function Loader(props) {
  return (
    <div className="spinnerWrapper">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
