import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import UserForm from "../../components/forms/UserForm";

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
                Add User
              </Typography>
              <Divider />

              <UserForm user="" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default AddUser;
