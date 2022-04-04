import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Login.css'

function Login() {
const navigate=useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const submitHandler = e => {
  e.preventDefault();
  navigate('/movieList');
}
  return (
    <div className="Login">
      <Form onSubmit={submitHandler}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;