import React, { Component } from "react";

class Comp extends Component {
  deleteitem(){
    this.props.delete(this.props.id);
  };
  render() {
    return (
       console.log(this.props),
      <div className="List" onClick={this.deleteitem}>
        {this.props.val}
      </div>
    );
  }
}

export default Comp;
