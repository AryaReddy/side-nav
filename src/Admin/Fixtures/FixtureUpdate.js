import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 950
  },
  list:{
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  }
});

const Team1 = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "England",
    label: "England"
  },
  {
    value: "Sri Lanka",
    label: "Sri Lanka"
  }
];
const Team2 = [
  {
    value: "South Africa",
    label: "South Africa"
  },
  {
    value: "New Zealand",
    label: "New Zealand"
  },
  {
    value: "Austrila",
    label: "Austrila"
  }
];
const HomeTeam = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "Austrila",
    label: "Austrila"
  }
];

const GameType = [
  {
    value: "Friendly Match",
    label: "Friendly Match"
  }
];

const Venue = [
  {
    value: "Bangaluru",
    label: "Bengaluru"
  },
  {
    value: "Chenni",
    label: "Chenni"
  }
];

const Series = [
  {
    value: "Twenty 20",
    label: "Twenty 20"
  },
  {
    value: "Champion Country Match",
    label: "Champion Country Match"
  }
];

const Scorer = [
  {
    value: "Scorer 1",
    label: "Scorer 1"
  },
  {
    value: "Scorer 2",
    label: "Scorer 2"
  }
];

const Live = [
  {
    value: "Yes",
    label: "Yes"
  },
  {
    value: "No",
    label: "No"
  }
];

const formStyle = { width: "100%" };

class OutlinedInputAdornments extends React.Component {
  state = {
    first_name: "",
    team1: "",
    team2: "",
    home_team: "",
    match_type: "",
    venue: "",
    series_id: "",
    series_name: "",
    description: "",
    fixture_date_time: "",
    gmt_offset: "",
    live_coverage: "",
    scorer_id: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <List component="nav" className={classes.list}  >
            <ListItem button divider>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Players" />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="Series" />
            </ListItem>
            <Divider light />
            <ListItem button divider>
              <ListItemText primary="Team" />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="Fixtures" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Umpire" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Scorer" />
            </ListItem>
          </List>

          <div
            style={{ marginLeft: "35%", textAlign: "left", marginTop: "5%" }}
          >
            <br />
            <Paper
              style={{
                width: "600px",
                paddingLeft: "2%",
                paddingRight: "0%",
                paddingTop: "1%"
              }}
            >
              <center>
                <h3>Fixture</h3>
              </center>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-1</InputAdornment>
                  )
                }}
              >
                {Team1.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-2</InputAdornment>
                  )
                }}
              >
                {Team2.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Home Team</InputAdornment>
                  )
                }}
              >
                {HomeTeam.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Game Type</InputAdornment>
                  )
                }}
              >
                {GameType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Venue</InputAdornment>
                  )
                }}
              >
                {Venue.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Series</InputAdornment>
                  )
                }}
              >
                {Series.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Match Description"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Match Description
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Match date and time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Match Description"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">GMT Offset</InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Scorer</InputAdornment>
                  )
                }}
              >
                {Scorer.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "93%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.weightRange}
                onChange={this.handleChange("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Live Coverage
                    </InputAdornment>
                  )
                }}
              >
                {Live.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <center>
                <Button
                  variant="contained"
                  style={{ width: "150px" }}
                  className={classes.button}
                >
                  Create
                </Button>
              </center>
              <br />
              <br /> <br />
              <br />
            </Paper>
          </div>
        </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedInputAdornments);
