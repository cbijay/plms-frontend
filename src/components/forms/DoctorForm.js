import React, { useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createDoctor, updateDoctor } from "../../store/actions/doctorsAction";
import usePreviousLocation from "../../hooks/usePreviousLocation";

function DoctorForm({ doctor, mode }) {
  const { id, name, email, contact, hospital_clinic, specialization } =
    doctor || "";
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateDoctor(id, data));
    } else {
      dispatch(createDoctor(data));
    }
  };

  useEffect(() => {
    setValue("name", name, { shouldDirty: true });
    setValue("email", email, { shouldDirty: true });
    setValue("contact", contact, {
      shouldDirty: true,
    });
    setValue("hospitalOrClinic", hospital_clinic, {
      shouldDirty: true,
    });
    setValue("specialization", specialization, {
      shouldDirty: true,
    });
  }, [name, email, contact, hospital_clinic, specialization, setValue]);

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
        name="contact"
        label="Contact"
        defaultValue={getValues("contact") ? getValues("contact") : ""}
        inputRef={register({ required: "Contact is required" })}
        error={!!errors.contact}
        helperText={!!errors.contact ? errors.contact.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="hospitalOrClinic"
        label="Hospital/Clinic"
        defaultValue={
          getValues("hospitalOrClinic") ? getValues("hospitalOrClinic") : ""
        }
        inputRef={register({ required: "Hospital/Clinic is required" })}
        error={!!errors.hospitalOrClinic}
        helperText={
          !!errors.hospitalOrClinic ? errors.hospitalOrClinic.message : ""
        }
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="specialization"
        label="Specialization"
        defaultValue={
          getValues("specialization") ? getValues("specialization") : ""
        }
        inputRef={register({ required: "Specialization is required" })}
        error={!!errors.specialization}
        helperText={
          !!errors.specialization ? errors.specialization.message : ""
        }
      />

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

export default DoctorForm;
