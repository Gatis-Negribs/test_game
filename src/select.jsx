import React from 'react'

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: 0,
    };
    this.updateParentState = this.updateParentState.bind(this);
  }

  updateParentState(e) {
    this.props.callBack(e.target.value);
  }
  
  render() {
    return (
      <div className="columns">
        <div className="column is-3 is-offset-3">
          <span>How often do you do sports:</span>
        </div>
        <div className="column is-3">
          <span className="select">
            <select value={this.state.activity} onChange={this.updateParentState}>
              <option value="0">Never</option>
              <option value="1">once a month</option>
              <option value="2">once a week</option>
              <option value="3">every day</option>
            </select>
          </span>
        </div>
      </div>
    );
  }
}

export default Select;