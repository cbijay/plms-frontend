import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import UserForm from "../../components/forms/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/usersAction";

function EditUser({ match }) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userId = match.params.id;

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

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
                Edit User
              </Typography>
              <Divider />

              <UserForm mode="edit" user={user} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditUser;
