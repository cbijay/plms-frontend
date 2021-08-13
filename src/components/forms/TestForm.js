import React, { useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";
import { useDispatch, useSelector } from "react-redux";
import { getOnlyGroups, getSubGroups } from "../../store/actions/groupAction";
import { createTest, updateTest } from "../../store/actions/testAction";

function TestForm({ test, mode }) {
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const {
    tests_name,
    tests_order,
    tests_cost,
    tests_normal_range,
    tests_default_value,
    group_name,
    subgroup_name,
    tests_unit,
    tests_upper_range,
    tests_lower_range,
    tests_interpretation,
    tests_specification,
  } = test || "";
  const { onlyGroups } = useSelector((state) => state.groups);
  const { subGroups } = useSelector((state) => state.groups);
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnlyGroups());
    dispatch(getSubGroups());
  }, [dispatch]);

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    if (mode === "edit") {
      dispatch(updateTest(test.id, data));
    } else {
      dispatch(createTest(data));
    }
  };

  useEffect(() => {
    setValue("name", tests_name, { shouldDirty: true });
    setValue("order", tests_order, { shouldDirty: true });
    setValue("cost", tests_cost, { shouldDirty: true });
    setValue("normalRange", tests_normal_range, { shouldDirty: true });
    setValue("defaultValue", tests_default_value, { shouldDirty: true });
    setValue("groupName", group_name, { shouldDirty: true });
    setValue("subGroupName", subgroup_name, { shouldDirty: true });
    setValue("unit", tests_unit, { shouldDirty: true });
    setValue("upperRange", tests_upper_range, { shouldDirty: true });
    setValue("lowerRange", tests_lower_range, { shouldDirty: true });
    setValue("interpretation", tests_interpretation, { shouldDirty: true });
    setValue("specification", tests_specification, { shouldDirty: true });
  }, [
    tests_name,
    tests_order,
    tests_cost,
    tests_normal_range,
    tests_default_value,
    group_name,
    subgroup_name,
    tests_unit,
    tests_upper_range,
    tests_lower_range,
    tests_interpretation,
    tests_specification,
    setValue,
  ]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            defaultValue={getValues("name") ? getValues("name") : ""}
            inputRef={register({ required: "Name is required" })}
            error={!!errors.name}
            helperText={!!errors.name ? errors.name.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            margin="normal"
            size="small"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="groupName-label">Group</InputLabel>
            <NativeSelect
              defaultValue={
                getValues("groupName") ? getValues("groupName") : ""
              }
              onChange={handleSelect}
              inputProps={{
                name: "groupName",
                id: "groupName-label",
              }}
              inputRef={register}
            >
              {onlyGroups && (
                <option aria-label="None" value="">
                  Select Group
                </option>
              )}
              {onlyGroups && onlyGroups.length > 0 ? (
                onlyGroups.map((group, index) => (
                  <option
                    key={index}
                    value={group.name}
                    aria-label={group.name}
                  >
                    {" "}
                    {group.name}{" "}
                  </option>
                ))
              ) : (
                <option>No group found!!</option>
              )}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="order"
            label="Order"
            name="order"
            type="number"
            defaultValue={getValues("order") ? getValues("order") : ""}
            inputRef={register({ required: "Order is required" })}
            error={!!errors.order}
            helperText={!!errors.order ? errors.order.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            margin="normal"
            size="small"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="subGroupName-label">Sub Group</InputLabel>

            <NativeSelect
              defaultValue={
                getValues("subGroupName") ? getValues("subGroupName") : ""
              }
              onChange={handleSelect}
              inputProps={{
                name: "subGroupName",
                id: "subGroupName-label",
              }}
              inputRef={register}
            >
              {subGroups && (
                <option aria-label="None" value="">
                  Select Sub Group
                </option>
              )}
              {subGroups && subGroups.length > 0 ? (
                subGroups.map((subGroup, index) => (
                  <option
                    key={index}
                    aria-label={subGroup.name}
                    value={subGroup.name}
                  >
                    {subGroup.name}
                  </option>
                ))
              ) : (
                <option>No sub group found!!</option>
              )}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="cost"
            label="Cost"
            name="cost"
            defaultValue={getValues("cost") ? getValues("cost") : ""}
            inputRef={register({ required: "Cost is required" })}
            error={!!errors.cost}
            helperText={!!errors.cost ? errors.cost.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="unit"
            label="Unit"
            name="unit"
            defaultValue={getValues("unit") ? getValues("unit") : ""}
            inputRef={register({ required: "Unit is required" })}
            error={!!errors.unit}
            helperText={!!errors.unit ? errors.unit.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="normalRange"
            label="Normal Range"
            name="normalRange"
            defaultValue={
              getValues("normalRange") ? getValues("normalRange") : ""
            }
            inputRef={register({ required: "Normal range is required" })}
            error={!!errors.normalRange}
            helperText={!!errors.normalRange ? errors.normalRange.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="upperRange"
            label="Upper Range"
            name="upperRange"
            defaultValue={
              getValues("upperRange") ? getValues("upperRange") : ""
            }
            inputRef={register({ required: "Upper range is required" })}
            error={!!errors.upperRange}
            helperText={!!errors.upperRange ? errors.upperRange.message : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="defaultValue"
            label="Default Value"
            name="defaultValue"
            defaultValue={
              getValues("defaultValue") ? getValues("defaultValue") : ""
            }
            inputRef={register({ required: "Default Value is required" })}
            error={!!errors.defaultValue}
            helperText={
              !!errors.defaultValue ? errors.defaultValue.message : ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="lowerRange"
            label="Lower Range"
            name="lowerRange"
            defaultValue={
              getValues("lowerRange") ? getValues("lowerRange") : ""
            }
            inputRef={register({ required: "Lower range is required" })}
            error={!!errors.lowerRange}
            helperText={!!errors.lowerRange ? errors.lowerRange.message : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            multiline
            id="interpretation"
            label="Interpretation"
            name="interpretation"
            inputRef={register}
            defaultValue={
              getValues("interpretation") ? getValues("interpretation") : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            margin="normal"
            multiline
            fullWidth
            id="specification"
            label="Specification"
            name="specification"
            inputRef={register}
            defaultValue={
              getValues("specification") ? getValues("specification") : ""
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {mode === "edit" ? "Update" : "Submit"}
          </Button>
        </Grid>

        <Grid item xs={3}>
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

export default TestForm;
