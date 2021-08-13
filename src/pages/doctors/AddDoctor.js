import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import DoctorForm from "../../components/forms/DoctorForm";

function AddUser() {
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
                Add Doctor
              </Typography>
              <Divider />

              <DoctorForm doctor="" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default AddUser;
