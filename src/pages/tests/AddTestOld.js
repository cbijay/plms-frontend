import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  TextField,
  NativeSelect,
  FormControl,
  InputLabel,
  Grid,
  Button,
} from "@material-ui/core";

function AddTest() {
  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Typography
            component="h5"
            variant="h6"
            color="textSecondary"
            gutterBottom
          >
            Add New Test
          </Typography>
          <Divider />

          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="group">Group</InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: "group",
                      id: "group",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Group 1</option>
                    <option value={20}>Group 2</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="order"
                  label="Order"
                  name="order"
                  autoComplete="order"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="group">Sub Group</InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: "sub_group",
                      id: "sub_group",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Sub group 1</option>
                    <option value={20}>Sub group 2</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="cost"
                  label="Cost"
                  name="cost"
                  autoComplete="cost"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="unit"
                  label="Unit"
                  name="unit"
                  autoComplete="unit"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="normal_range"
                  label="Normal Range"
                  name="normal_range"
                  autoComplete="normal_range"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="upper_range"
                  label="Upper Range"
                  name="upper_range"
                  autoComplete="upper_range"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="default_range"
                  label="Default Range"
                  name="default_range"
                  autoComplete="default_range"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="lower_range"
                  label="Lower Range"
                  name="lower_range"
                  autoComplete="lower_range"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  id="interpretation"
                  label="Interpretation"
                  name="interpretation"
                  autoComplete="interpretation"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  margin="normal"
                  multiline
                  required
                  fullWidth
                  id="specification"
                  label="Specification"
                  name="specification"
                  autoComplete="specification"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button
                  type="reset"
                  fullWidth
                  variant="contained"
                  color="default"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default AddTest;
