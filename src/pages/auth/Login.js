import { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@material-ui/core";
import LoginForm from "../../components/forms/LoginForm";
import DismissableAlert from "../../components/alert/DismissableAlert";
import useAlertStatus from "../../hooks/useAlertStatus";

function Login() {
  const { loggedIn } = useSelector((state) => state.auth);
  const { type, message } = useSelector((state) => state.alert);
  const history = useHistory();
  const { isOpen, closeAlert } = useAlertStatus();

  useEffect(() => {
    if (loggedIn) {
      history.push("/dashboard");
    }
  }, [history, loggedIn]);

  return (
    <AuthLayout>
      <Card>
        <CardContent>
          {message && (
            <DismissableAlert
              open={isOpen}
              type={type}
              message={message}
              closeAlert={closeAlert}
            />
          )}
          <LoginForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default Login;
