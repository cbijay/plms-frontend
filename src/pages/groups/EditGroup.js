import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import GroupForm from "../../components/forms/GroupForm";
import { useSelector, useDispatch } from "react-redux";
import { getGroup } from "../../store/actions/groupAction";

function EditGroup({ match }) {
  const { group } = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const groupId = match.params.id;

  useEffect(() => {
    dispatch(getGroup(groupId));
  }, [dispatch, groupId]);

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
                Edit Group
              </Typography>
              <Divider />

              <GroupForm mode="edit" group={group} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditGroup;
