import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import DoctorForm from "../../components/forms/DoctorForm";
import { useSelector, useDispatch } from "react-redux";
import { getDoctor } from "../../store/actions/doctorsAction";

function EditUser({ match }) {
  const { doctor } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const doctorId = match.params.id;

  useEffect(() => {
    dispatch(getDoctor(doctorId));
  }, [dispatch, doctorId]);

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Edit Doctor
              </Typography>
              <Divider />

              <DoctorForm mode="edit" doctor={doctor} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditUser;
