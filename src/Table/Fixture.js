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
      <div className={classes.root}>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Team 1</InputAdornment>
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
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Team 2</InputAdornment>
            )
          }}
        >
          {Team2.map(option => (
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

        <TextField
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

        <TextField
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
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="With Select"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Live Coverage</InputAdornment>
            )
          }}
        >
          {Live.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedInputAdornments);
