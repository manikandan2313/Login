import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div className="header">Login</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <h1><Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></h1>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
         <h1><Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /></h1>
        </Form.Group>
        <div className="btn">
          <button type="submit" class="btn-default">Login</button>
        </div>
      </Form>
    </div>
  );
}

export default Login;