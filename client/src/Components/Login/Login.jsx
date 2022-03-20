import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";
import { Container, Row, Button, Col, Figure } from "react-bootstrap";

function Login({ onLogin }) {
  const [showResetForm, setShowResetForm] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col>
          <Figure>
            <Figure.Image
              width={1500}
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/best-animal-crossing-villagers.jpg?q=50&fit=contain&w=480&h=240&dpr=1.5"
              alt="Animal Crossing Logo"
            />
          </Figure>
        </Col>
        <Col>
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <div>
                Don't have an account? &nbsp;
                <Button
                  variant="outline-dark"
                  onClick={() => setShowLogin(false)}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={() => setShowResetForm(!showResetForm)}
                  className="m-3"
                  variant="outline-dark"
                >
                  {" "}
                  {showResetForm ? "Cancel Reset Password" : "Reset Password"}
                </Button>
                {showResetForm ? (
                  <ResetPasswordForm setShowResetForm={setShowResetForm} />
                ) : null}
              </div>
            </>
          ) : (
            <>
              <SignUpForm onLogin={onLogin} />
              <p>
                Already have an account? &nbsp;
                <Button
                  className="m-3"
                  variant="outline-dark"
                  onClick={() => setShowLogin(true)}
                >
                  Log In
                </Button>
              </p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
