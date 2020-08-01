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

const Live = [
  {
    value: "Dhoni",
    label: "Dhoni"
  },
  {
    value: "Virat",
    label: "Virat"
  }
];

const formStyle = { width: "100%" };

class OutlinedInputAdornments extends React.Component {
  state = {
    team_id: "",
    players: [],
    teams: [],
    message: null,
    selected: "",
    player_id: "",
    tname: ""
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
                <h3>Series Name</h3>
              </center>
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
                    <InputAdornment position="start">Team Name</InputAdornment>
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
