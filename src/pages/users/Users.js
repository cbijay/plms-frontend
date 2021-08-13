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
} from "@material-ui/core";
import clsx from "clsx";
import {
  Add as AddIcon,
  Create as CreateIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../store/actions/usersAction";
import { Link, useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";

function Users() {
  const classes = AppStyle();
  const { users } = useSelector((state) => state.users);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    { headingName: "#" },
    { headingName: "Name" },
    { headingName: "Email" },
    { headingName: "Username" },
    { headingName: "Role" },
    { headingName: "Actions" },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleEdit = (id) => {
    history.push("edit-user/" + id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Users
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/add-user"
                className={classes.button}
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
              {users.length > 0 ? (
                users.map(
                  (
                    {
                      users_id,
                      users_name,
                      users_email,
                      users_username,
                      role_name,
                    },
                    index
                  ) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell> {users_name} </TableCell>
                      <TableCell> {users_email} </TableCell>
                      <TableCell> {users_username} </TableCell>
                      <TableCell> {role_name} </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={clsx(classes.editButton, classes.button)}
                          onClick={() => handleEdit(users_id)}
                        >
                          <CreateIcon />
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.button}
                          onClick={() => handleDelete(users_id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )
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

export default Users;
