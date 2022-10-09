import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ backgroundColor:"#EBEBEB", height:"100vh" }}>
      <Dashboard/>
    </div>
  );
}

export default App;
