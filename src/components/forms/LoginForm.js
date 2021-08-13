import React from "react";
import {
  TextField,
  Button,
  Grid,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../store/actions/authAction";

function LoginForm() {
  const { isLoading } = useSelector((state) => state.auth);
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="username"
        label="Username"
        inputRef={register({ required: "Username is required" })}
        error={!!errors.username}
        helperText={!!errors.username ? errors.username.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        type="password"
        name="password"
        label="Password"
        inputRef={register({ required: "Password is required" })}
        error={!!errors.password}
        helperText={!!errors.password ? errors.password.message : ""}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        {isLoading && <CircularProgress color="secondary" />}
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2" color="inherit">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" color="inherit">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
