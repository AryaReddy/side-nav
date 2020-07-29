import React, { Component } from 'react'
import FixtureDataService from './Service/FixtureDataService';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FixtureComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            fixture: [],
            message: null,
            open: false
        }
        this.deleteFixtureClicked = this.deleteFixtureClicked.bind(this)
        this.refreshFixture = this.refreshFixture.bind(this)
        this.updateFixtureClicked = this.updateFixtureClicked.bind(this)
        this.addFixtureClicked = this.addFixtureClicked.bind(this)   
    }
 
    componentDidMount() {
        this.refreshFixture();   
    }
    
 
    refreshFixture() {
        FixtureDataService.retrieveAllFixture()
            .then(
                response => {
                    console.log(response);
                    this.setState({ fixture: response.data })
                }
            )
    }
 
    deleteFixtureClicked(id) {
        FixtureDataService.deleteFixture(id)
            .then(
                response => {
                    this.setState({ message: `Delete of fixture with fixture ID ${id} Successful` })
                    this.refreshFixture()
                }
            )
    
    } 
 
   updateFixtureClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Fixtures/${id}`)
    }
 
    addFixtureClicked() {
        this.props.history.push(`/admin/dashboard/FixtureAddForm`)
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
                <a href="/admin/dashboard/FixtureDisplay"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Team</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                <div>
                        <button className="btn newBtn" onClick={this.addFixtureClicked}>New</button>
                </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>TEAM A</th>
                            <th>TEAM B</th>
                            <th>HOME TOWN</th>
                            <th>MATCH TYPE</th>
                            <th>VENUE</th>
                            <th>SERIES</th>
                            <th>MATCH DESCRIPTION</th>
                            <th>MATCH DATE/TIME</th>
                            <th>GMT OFFSET</th>
                            <th>LIVE COVERAGE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>

                    
                        
                        </tr>
                        <tbody>
                        {
                                this.state.fixture.map(
                                    fix =>
                                        <tr key={fix.fixture_id}>
                                            <td>{fix.team1}</td>
                                            <td>{fix.team2}</td>
                                            <td>{fix.home_team}</td>
                                            <td>{fix.match_type}</td>
                                            <td>{fix.venue}</td>
                                            <td>{fix.series_name}</td>
                                            <td>{fix.description}</td>
                                            <td>{fix.fixture_date_time}</td>
                                            <td>{fix.gmt_offset}</td>
                                            <td>{fix.live_coverage}</td>
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
            <Button onClick={this.deleteFixtureClicked(fix.fixture_id,fix.team1)}  color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
                                            
                                            <td><button className="btn updateBtn" onClick={() => this.updateFixtureClicked(fix.fixture_id)}>Update</button></td>
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
 
export default FixtureComponent


