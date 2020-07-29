import React, { Component } from 'react'
import TeamDataService from './Service/TeamDataService';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class TeamComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            message: null,
            open: false
        }
        this.deleteTeamClicked = this.deleteTeamClicked.bind(this)
        this.refreshTeams = this.refreshTeams.bind(this)
        this.updateTeamClicked = this.updateTeamClicked.bind(this)
        this.addTeamClicked = this.addTeamClicked.bind(this)  
        this.addPlayerClicked=this.addPlayerClicked.bind(this)
        this.showPlayerClicked=this.showPlayerClicked.bind(this)
    }
 
    componentDidMount() {
        this.refreshTeams();   
    }
    
 
    refreshTeams() {
        TeamDataService.retrieveAllTeams()
            .then(
                response => {
                    console.log(response);
                    this.setState({ teams: response.data })
                }
            )
    }
 
    deleteTeamClicked(id,teamname) {
        TeamDataService.deleteTeam(id)
            .then(
                response => {
                    this.setState({ message: `Delete of team ${teamname} is Successful` })
                    this.refreshTeams()
                }
            )
    
    } 
 
    updateTeamClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Team/${id}`)
    }
 
    addTeamClicked() {
        this.props.history.push(`/admin/dashboard/TeamAddForm`)
    }
    addPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamAddPlayer/${id}`)
    }
    showPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamShowPlayer/${id}`)
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addTeamClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>Team Name</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Add Player </th>
                            <th>Show Player</th>
                            <th>Delete</th>
                            <th>Update</th>
                    
                        </tr>
                        <tbody>
                        {
                                this.state.teams.map(
                                    team =>
                                        <tr key={team.team_id}>
                                            <td>{team.tname}</td>
                                            <td>{team.tstate}</td>
                                            <td>{team.tcountry}</td>
                                            <td><button className="btn warning"onClick={() => this.addPlayerClicked(team.team_id)}>Add Player</button></td>
                                            <td><button className="btn updateBtn"onClick={() => this.showPlayerClicked(team.team_id)} >Show Player</button></td>
                                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          DELETE
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are sure to delete.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.deleteTeamClicked(team.team_id,team.tname)}  color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
                                            
                                            <td><button className="btn updateBtn" onClick={() => this.updateTeamClicked(team.team_id)}>Update</button></td>
                                        </tr>
                                )
                            }
                                    
                        </tbody>
                    </table>
           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default TeamComponent
