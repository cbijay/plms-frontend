import React, { useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  createTechnician,
  updateTechnician,
} from "../../store/actions/techniciansAction";
import usePreviousLocation from "../../hooks/usePreviousLocation";

function TechnicianForm({ technician, mode }) {
  const { id, name, license_number, specialization } = technician || "";
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateTechnician(id, data));
    } else {
      dispatch(createTechnician(data));
    }
  };

  useEffect(() => {
    setValue("name", name, { shouldDirty: true });
    setValue("licenseNumber", license_number, { shouldDirty: true });
    setValue("specialization", specialization, {
      shouldDirty: true,
    });
  }, [name, license_number, specialization, setValue]);

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
        name="licenseNumber"
        label="License No."
        defaultValue={
          getValues("licenseNumber") ? getValues("licenseNumber") : ""
        }
        inputRef={register({ required: "License No. is required" })}
        error={!!errors.licenseNumber}
        helperText={!!errors.licenseNumber ? errors.licenseNumber.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="specialization"
        label="specialization"
        defaultValue={
          getValues("specialization") ? getValues("specialization") : ""
        }
        inputRef={register({ required: "Specialization is required" })}
        error={!!errors.specialization}
        helperText={
          !!errors.specialization ? errors.specialization.message : ""
        }
      />

      {mode !== "edit" ? (
        <>
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
        </>
      ) : (
        ""
      )}

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

export default TechnicianForm;
