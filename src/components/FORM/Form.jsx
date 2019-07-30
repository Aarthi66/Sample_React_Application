import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addNotes, delItem } from "../../js/actions/index";
import "./Form.css";

function mapDispatchToProps(dispatch) {
  //dispatch the actions
  return {
    addNotes: notes => dispatch(addNotes(notes)),
    delItem: index => dispatch(delItem(index))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleKeyPress=this.handleKeyPress.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state; //Destructuring to make the variable more readable from object

    if (title !== "" && title.trim() !== "") {
      const id = uuidv1(); //creating ID for each entries using Universal Unique Identifier
      this.props.addNotes({ title, id }); //addNotes function in actions is called
      this.setState({ title: "" }); //Making the content in text box as empty once it get added
    }
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <input
          type="text"
          className="textInput"
          id="title"
          value={title}
          onChange={this.handleChange}
          // onKeyPress={this.handleKeyPress}
        />
        <div className="btn" onClick={this.handleSubmit}>
          +
        </div>
      </div>
    );
  }
}
//connect react component with redux by CONNECT
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
