import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter personal details" />
          <TextField
            hintText="name of jef"
            floatingLabelText="job"
            onChange={handleChange("job")}
            defaultValue={values.job}
          />
          <br />
          <TextField
            hintText="name of jef"
            floatingLabelText="location"
            onChange={handleChange("location")}
            defaultValue={values.location}
          />
          <br />
          <TextField
            hintText="name of jef"
            floatingLabelText="profile"
            onChange={handleChange("profile")}
            defaultValue={values.profile}
          />
          <br />
          <TextField
            hintText="name of jef"
            floatingLabelText="email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = { button: { margin: 15 } };

export default FormPersonalDetails;
