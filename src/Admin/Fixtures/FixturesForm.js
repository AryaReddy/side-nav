import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FixtureDataService from './Service/FixtureDataService';



class FixturesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           team1:"",
           team2:"",
           home_team:"",
           match_type:"",
           venue:"",
           series_id:"",
           series_name:"",
           description:"",
           fixture_date_time:"",
           gmt_offset:"",
           live_coverage:"",
           scorer_id:""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
   /* componentDidMount() {

    }   */
    validate(values) {
        let errors = {};
        if (!values.description) {
            errors.description = 'Enter Match Description'
        } else if(!(values.description).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.description = 'Invalid Match Description'
        }
        return errors
    
       
    }
    
    onSubmit(values) {
        var fixture = {
            team1: values.team1,
            Team2: values.team2,
            home_team: values.home_team,
            match_type:values.match_type,
            venue:values.venue,
            series_id:values.series_id,
            series_name:values.series_name,
            description:values.description,
            match_date_time: this.state.match_date_time,
            gmt_offset:values.gmt_offset,
            live_coverage:values.live_coverage,
            scorer_id:values.scorer_id
        }
        console.log(fixture);
        FixtureDataService.createFixture(fixture)
         .then(() => this.props.history.push('/admin/dashboard/FixtureDisplay'))
        
        console.log(values);
        
    }
    render() {
        
        let team1 = this.state.team1
        let team2 = this.state.team2
        let home_team = this.state.home_team
        let match_type = this.state.match_type
        let venue= this.state.venue
        let series_id = this.state.series_id
        let series_name= this.state.series_name
        let description = this.state.description
        let fixture_date_time = this.state.fixture_date_time
        let gmt_offset = this.state.gmt_offset
        let live_coverage = this.state.live_coverage
        let scorer_id = this.state.scorer_id

        return (
            <div>
                 <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Mastar</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{team1,team2,match_type,home_team,venue,series_id,series_name,description,fixture_date_time ,live_coverage,gmt_offset,scorer_id}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>  
                                 <br/> 
                                     <ErrorMessage name="description" component="div"
                                        className=" errormsg alert warning" />     
                                    <br></br>
                                    <label>Team1</label>
                                    <Field as="select" name="team1">
                                        <option value="A_team">India</option>
                                        <option value="B_team">England</option>
                                    </Field><br></br><br></br>

                                    <label>Team2</label>
                                    <Field as="select" name="team2">
                                        <option value="C_team">England</option>
                                        <option value="D_team">Sri Lanka</option>
                                    </Field><br></br><br></br>

                                    
                                    <label>Home Team</label>
                                    <Field as="select" name="home_team">
                                        <option value="C_team">India</option>
                                        <option value="D_team">England</option>
                                    </Field><br></br><br></br>

                                    <label>Game Type</label>
                                    <Field as="select" name="match_type">
                                        <option value="C_team">Friendly match</option>
                                        <option value="D_team"></option>
                                    </Field><br></br><br></br>

                                    <label>Venue</label>
                                    <Field as="select" name="venue">
                                        <option value="C_team">Bangalore</option>
                                        <option value="D_team">Chennai</option>
                                    </Field><br></br><br></br>

                                    <label>Series</label>
                                    <Field as="select" name="series_name">
                                        <option value="C_team">T20 series</option>
                                        <option value="D_team">Champion county match</option>
                                    </Field><br></br><br></br>

                                    <label>Match Description</label>
                                    <Field className="form-control" type="text" name="description" /><br></br><br></br>

                                   
                                    <label>Match Date and Time</label>
                                    <Field className="form-control" type="text" name="fixture_date_time" /><br></br><br></br>
                                    

                                    <label>GMT Offset</label>
                                    <Field className="form-control" type="text" name="gmt_offset" /><br></br><br></br>

                                    <label>Scorer</label>
                                    <Field as="select" name="scorer">
                                        <option value="Scorer 1">Scorer 1</option>
                                        <option value="Scorer 2">Scorer 2</option>
                                    </Field><br></br><br></br>

                                    <label>Live coverage</label>
                                    <Field as="select" name="live_coverage">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Field><br></br><br></br>

                                <button className="btn warning marginsave" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
                </div>
            </div>
        )
    }

}

export default FixturesForm
