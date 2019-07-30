import React, { Component } from "react";
import { connect } from "react-redux";
import "./List.css";
import { delItem } from "../../js/actions/index";
import Comp from "../clickComp";
const mapStateToProps = state => {
  return { notes: state.notes };
};
function mapDispatchToProps(dispatch) {
  return {
    delItem: index => dispatch(delItem(index))
  };
}
class ConnectedList extends Component {
  constructor() {
    super();
    this.deleteitem = this.deleteitem.bind(this);
  }
  deleteitem(e) {
    this.props.delItem(e);
  }
  render() {
    let notes = this.props.notes;
    console.log(notes);
    return (
      <div>
        {notes.map(el => (
          <Comp val={el.title} id={el.id} delete={this.deleteitem} />
        ))}
      </div>
    );
  }
}
const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default List;
