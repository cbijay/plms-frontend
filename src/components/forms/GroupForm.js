import React, { useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createGroup, updateGroup } from "../../store/actions/groupAction";
import usePreviousLocation from "../../hooks/usePreviousLocation";

function GroupForm({ group, mode }) {
  const { id, name, order, cost, is_sub_group, interpretation, specification } =
    group || "";
  const [checked, setChecked] = React.useState();
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (mode === "edit") {
      dispatch(updateGroup(id, data));
    } else {
      dispatch(createGroup(data));
    }
  };

  useEffect(() => {
    setValue("name", name, { shouldDirty: true });
    setValue("order", order, { shouldDirty: true });
    setValue("cost", cost, { shouldDirty: true });
    setChecked(is_sub_group);
    setValue("interpretation", interpretation, { shouldDirty: true });
    setValue("specification", specification, { shouldDirty: true });
  }, [
    name,
    order,
    cost,
    is_sub_group,
    interpretation,
    specification,
    setValue,
  ]);

  const handleCheckbox = (e) => {
    setChecked(!checked);
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
        name="order"
        label="Order"
        type="number"
        defaultValue={getValues("order") ? getValues("order") : ""}
        inputRef={register}
        error={!!errors.order}
        helperText={!!errors.order ? errors.order.message : ""}
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="cost"
        label="Cost"
        type="number"
        defaultValue={getValues("cost") ? getValues("cost") : ""}
        inputRef={register}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={checked || false}
            name="isSubGroup"
            onChange={handleCheckbox}
            inputRef={register}
          />
        }
        label="Is Sub Group"
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="interpretation"
        label="interpretation"
        multiline
        defaultValue={
          getValues("interpretation") ? getValues("interpretation") : ""
        }
        inputRef={register}
      />
      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="specification"
        label="Specification"
        multiline
        defaultValue={
          getValues("specification") ? getValues("specification") : ""
        }
        inputRef={register}
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

export default GroupForm;
