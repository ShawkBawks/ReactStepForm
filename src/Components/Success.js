import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = event => {
    event.preventDefault();
    //process form on backend here
    this.props.nextStep();
  };
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success!" />
          <h1>Thank You For Your Submission!</h1>
          <p>You will get an email with further instructions shortly!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Success;
