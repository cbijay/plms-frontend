import React, { useEffect } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompany,
  createUpdateCompany,
} from "../../store/actions/companyAction";
import { useForm } from "react-hook-form";
import usePreviousLocation from "../../hooks/usePreviousLocation";

function CompanyForm() {
  let {
    data: { company_name, company_address, company_reg_num } = {},
  } = useSelector((state) => state.company);
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { backToLocation } = usePreviousLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    setValue("companyName", company_name, { shouldDirty: true });
    setValue("companyAddress", company_address, { shouldDirty: true });
    setValue("companyRegNum", company_reg_num, { shouldDirty: true });
  }, [company_name, company_address, company_reg_num, setValue]);

  const onSubmit = (data) => {
    dispatch(createUpdateCompany(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="companyName"
        label="Company Name"
        name="companyName"
        defaultValue={
          getValues("company_name") ? getValues("company_name") : ""
        }
        inputRef={register}
        disabled={company_name ? true : false}
      />

      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="companyAddress"
        label="Company Address"
        name="companyAddress"
        defaultValue={
          getValues("company_address") ? getValues("company_address") : ""
        }
        inputRef={register}
      />
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="companyRegNum"
        label="Company Registration Number"
        name="companyRegNum"
        defaultValue={
          getValues("company_reg_num") ? getValues("company_reg_num") : ""
        }
        inputRef={register}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Update
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

export default CompanyForm;
