import React, { Component } from 'react'
import PlayerDataService from './Service/PlayerDataService';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ListPlayersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null,
            open: false
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPlayers();
    }

    refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }

    deletePlayerClicked(id,firstname) {
        this.setState({ open: false });
        PlayerDataService.deletePlayer(id)

            .then(
                response => {
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshPlayers()
                }
            )
    
    }

    updatePlayerClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Player/${id}`)
    }

    addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/PlayerAddForm`)
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
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addPlayerClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Player Initials</th>
                            <th>Gender</th>
                            <th>Date of Birth </th>
                            <th>Visual Classification</th>
                            <th>Nationality</th>
                            <th>Batting Style</th>
                            <th>Bowling Style </th>
                            <th>Player Role </th>
                            <th>Retired or Playing</th>
                            <th>Delete</th>
                            <th>Update</th>
                    
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    player =>
                                        <tr key={player.player_id}>
                                            <td>{player.first_name}</td>
                                            <td>{player.last_name}</td>
                                            <td>{player.player_initials}</td>
                                            <td>{player.gender}</td>
                                            <td>{player.player_dob}</td>
                                            <td>{player.category}</td>
                                            <td>{player.nationality}</td>
                                            <td>{player.player_batting_style}</td>
                                            <td>{player.player_bowling_style}</td>
                                            <td>{player.player_role}</td>
                                            <td>{player.player_status}</td>
                                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                                                 DELETE
                                            </Button>
                                            <Dialog
                                                 open={this.state.open}
                                                 onClose={this.handleClose}
                                                 aria-labelledby="alert-dialog-title"
                                                 aria-describedby="alert-dialog-description"
                                            >
                                            <DialogTitle id="alert-dialog-title">{"Delete?"}</DialogTitle>
                                            <DialogContent>
                                            <DialogContentText id="alert-dialog-description">Are you sure you want to delete?</DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                            <Button onClick={this.handleClose} color="primary">No</Button>
                                            <Button onClick={() => {this.deletePlayerClicked(player.player_id,player.first_name)}} color="primary" autoFocus>Yes</Button>
                                            </DialogActions>
                                            </Dialog>
                                            <td><button className="btn updateBtn" onClick={() => this.updatePlayerClicked(player.player_id)}>Update</button></td>
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

export default ListPlayersComponent