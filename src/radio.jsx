import React from 'react'

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: false,
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState(e) {
    let newVal = false;
    if(event.target.value == 'true') newVal = true;
    this.setState({val: newVal})
    this.props.callBack(newVal);
  }
  
  render() {
    return (
      <div className="columns">
        <div className="column is-3 is-offset-3">
          <span>{this.props.question}</span>
        </div>
        <div className="column is-3">
          <label className="radio">
            <input type="radio" className="radio" value={false} onChange={this.handleState} checked={!this.state.val} />
            No
            </label>
          <label className="radio">
            <input type="radio" className="radio" value={true} onChange={this.handleState} checked={this.state.val} />
            Yes
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;