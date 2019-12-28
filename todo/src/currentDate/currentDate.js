import React, {Component} from "react"

class CurrentDate extends Component {
  state = {date: new Date()}

  render() {
    return (
      <div className={"date"}>
        <span> Today:  {this.state.date.toLocaleDateString()}</span>
      </div>
    );
  }
}

export default CurrentDate;