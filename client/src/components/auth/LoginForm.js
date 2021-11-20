import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
  //Context
  const { loginUser } = useContext(AuthContext);
  // Router
  const history = useHistory();
  // Local State
  const [loginFrom, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState(null);

  const { username, password } = loginFrom;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginFrom, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginFrom);
      if (loginData.success) {
        history.push("dashboard");
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="User Name"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="mt-2"
            type="password"
            placeholder="Pass Word"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button className="mt-2" variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-4">
        Don't Have accout
        <Link to="register" className="mr-2">
          <Button variant="info" size="sm" className="ml-2 ma-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
