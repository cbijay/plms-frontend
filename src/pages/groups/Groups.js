import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import {
  Add as AddIcon,
  Create as CreateIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getGroups, deleteGroup } from "../../store/actions/groupAction";
import AppStyle from "../../styles/AppStyle";
import { Link, useHistory } from "react-router-dom";

function Groups() {
  const classes = AppStyle();
  const { groups } = useSelector((state) => state.groups);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Name" },
    { headingName: "Order" },
    { headingName: "Cost" },
    { headingName: "Is Sub Group" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("edit-group/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteGroup(id));
  };

  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Grid container justify="space-between" spacing={10}>
            <Grid item>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Groups
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="small"
                component={Link}
                to="/add-Group"
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column.headingName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {groups.length > 0 ? (
                groups.map((group, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell> {group.name} </TableCell>
                    <TableCell> {group.order} </TableCell>
                    <TableCell> {group.cost} </TableCell>
                    <TableCell>
                      {" "}
                      {group.is_sub_group ? (
                        <IconButton color="primary">
                          <CheckCircleIcon />
                        </IconButton>
                      ) : (
                        <IconButton color="secondary">
                          <CancelIcon />
                        </IconButton>
                      )}{" "}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={clsx(classes.editButton, classes.button)}
                        onClick={() => handleEdit(group.id)}
                      >
                        <CreateIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => handleDelete(group.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No record found!!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default Groups;
