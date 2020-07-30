import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


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
  }
});

const Gender = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];
const Visual = [
  {
    value: "B1",
    label: "B1"
  },
  {
    value: "B2",
    label: "B2"
  },
  {
    value: "B3",
    label: "B3"
  }
];
const Batting = [
  {
    value: "Right-Hand Batting",
    label: "Right-Hand Batting"
  },
  {
    value: "Left-Hand Batting",
    label: "Left-Hand Batting"
  },
 
];

const Bowling = [
  {
    value: "Right-Hand Bowling",
    label: "Right-Hand Bowling"
  },
  {
    value: "Left-Hand Bowling",
    label: "Left-Hand Bowling"
  },
  
];

const State = [
  {
    value: "Retaired",
    label: "Retaired"
  },
  {
    value: "Playing",
    label: "Playing"
  }
];

class OutlinedInputAdornments extends React.Component {
  state = {
    amount: "",

    weightRange: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
        
     
      <div className={classes.root}>
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">First Name</InputAdornment>
            )
          }}
        />
        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Last Name</InputAdornment>
            )
          }}
        />

        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Initial"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Initial</InputAdornment>
            )
          }}
        />

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Gender</InputAdornment>
            )
          }}
        >
          {Gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Visual Classification
              </InputAdornment>
            )
          }}
        >
          {Visual.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Nationality"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Nationality</InputAdornment>
            )
          }}
        />

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Batting Style</InputAdornment>
            )
          }}
        >
          {Batting.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Bowling Style</InputAdornment>
            )
          }}
        >
          {Bowling.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Player Role"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Player Role</InputAdornment>
            )
          }}
        />

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Status</InputAdornment>
            )
          }}
        >
          {State.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      </div>
            </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedInputAdornments);
