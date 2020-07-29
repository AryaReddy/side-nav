/* import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
//import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
 
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 950
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
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


function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {["Dashboard", "fixture", "teams", "players", "series"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};
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
          
          
       
        <div className={classes.root}>
          <TextField
            id="outlined-simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Name</InputAdornment>
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
                <InputAdornment position="start">Name</InputAdornment>
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
                <InputAdornment position="start">Name</InputAdornment>
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
  
      );
    }
  }
  
  OutlinedInputAdornments.propTypes = {
    classes: PropTypes.object.isRequired
  };

export withStyles(styles)(ClippedDrawer)(OutlinedInputAdornments);
*/
