import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class FormThing extends Component {
  state = {
    firstName: '',
    lastName: ''
  }
  nameChange(obj, newValue) {
    console.log('nameChange', newValue);
    this.setState({firstName: newValue});
    console.log('after', this.state);
  }
  onClick() {
    alert(this.state.firstName);
  }
  render() {
    return (
      <div>
        Here's a button<br/>
        <TextField
          floatingLabelText="First Name"
          onChange={this.nameChange.bind(this)}
          /><br/>
        <RaisedButton
          label="Hello"
          secondary
          onClick={this.onClick.bind(this)}
          />
        </div>
    );
  }
}
export default FormThing;
