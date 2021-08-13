import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../../store/actions/usersAction";
import { getRoles } from "../../store/actions/roleAction";

function UserForm({ user, mode }) {
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { users_id, users_name, users_email, users_username, role_name } =
    user || "";
  const { roles } = useSelector((state) => state.roles);
  const [changePassword, setChangePassword] = useState(false);
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateUser(users_id, data));
    } else {
      dispatch(createUser(data));
    }
  };

  const handlePassword = (e) => {
    setChangePassword(e.target.checked);
  };

  useEffect(() => {
    setValue("name", users_name, { shouldDirty: true });
    setValue("email", users_email, { shouldDirty: true });
    setValue("username", users_username, {
      shouldDirty: true,
    });
    setValue("roleName", role_name, { shouldDirty: true });
  }, [users_name, users_email, users_username, role_name, setValue]);

  const handleSelect = (e) => {
    setValue("roleName", e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="name"
        label="Name"
        defaultValue={getValues("name") ? getValues("name") : ""}
        inputRef={register({ required: "Name is required" })}
        error={!!errors.name}
        helperText={!!errors.name ? errors.name.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="email"
        label="Email"
        defaultValue={getValues("email") ? getValues("email") : ""}
        inputRef={register({ required: "Email is required" })}
        error={!!errors.email}
        helperText={!!errors.email ? errors.email.message : ""}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="username"
        label="Username"
        defaultValue={getValues("username") ? getValues("username") : ""}
        inputRef={register({ required: "Username is required" })}
        error={!!errors.username}
        helperText={!!errors.username ? errors.username.message : ""}
      />

      {mode !== "edit" ? (
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
      ) : (
        ""
      )}

      {mode === "edit" ? (
        <FormControlLabel
          control={
            <Checkbox
              name="changePassword"
              checked={changePassword}
              onChange={handlePassword}
            />
          }
          label="Change Password"
        />
      ) : (
        ""
      )}

      {changePassword ? (
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
      ) : (
        ""
      )}

      <FormControl margin="normal" size="small" variant="standard" fullWidth>
        <InputLabel htmlFor="roleName-label">Role</InputLabel>

        <NativeSelect
          defaultValue={getValues("roleName") || ""}
          onChange={handleSelect}
          inputProps={{
            name: "roleName",
            id: "roleName-label",
          }}
          inputRef={register}
        >
          <option aria-label="None" value="">
            Select Role
          </option>
          {roles && roles.length > 0 ? (
            roles.map(({ role_name }) => (
              <option key={role_name} aria-label={role_name} value={role_name}>
                {role_name}
              </option>
            ))
          ) : (
            <option>No role found!!</option>
          )}
        </NativeSelect>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {mode === "edit" ? "Update" : "Submit"}
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="default"
            onClick={backToLocation}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UserForm;
