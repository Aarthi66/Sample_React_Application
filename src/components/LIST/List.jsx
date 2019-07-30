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
// deleteitem(e)
// {
//   e.preventDefault();
//   this.props.delItem(e.id);
// };
// const ConnectedList = ({ articles }) => (

//  <div>
//    {articles.map(el => (
//     //  <Form.Control size="lg" type="text" placeholder={el.title} />
//       <div className="List" onClick={(el)=> this.deleteitem(el) } key={el.id}>
//         {el.title}
//       </div>
//     ))}
//  </div>

// );
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
          //  <Form.Control size="lg" type="text" placeholder={el.title} />
          // <div className="List"

          // key={el.id} >
          //   {el.title}
          // </div>
          // <div
          //   className="List"
          //   key={el.id}
          //   onClick={() => this.deleteitem(el.id)} >
          //   {el.title}
          // </div>
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
