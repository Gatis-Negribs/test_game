import React from 'react'
import ReactDOM from 'react-dom'
require('./mystyles.scss')

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      activity: 0
     };

    this.handleAge = this.handleAge.bind(this);
    this.handleActivity = this.handleActivity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAge(event) {
    const regex = /^[0-9\b]+$/;
    const maxAge = 100;
    if ((event.target.value === '' || regex.test(event.target.value)) && event.target.value < maxAge) {
      this.setState({age: event.target.value})
    }
  }

  handleActivity(event) {
    this.setState({activity: event.target.value})
  }

  handleSubmit(event) {
    if(this.state.age == '') return;
    if(this.state.activity == 0) return;
    alert('Age: ' + JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="container box">
        <div className="columns">
          <div className="column is-3 is-offset-3">
            <span>Your age:</span>
          </div>
          <div className="column is-3">
            <input type="text" className="input" value={this.state.age} onChange={this.handleAge} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 is-offset-3">
            <span>How often do you do sports:</span>
          </div>
          <div className="column is-3">
            <span className="select">
              <select value={this.state.activity} onChange={this.handleActivity}>
                <option value="0">Never</option>
                <option value="1">once a month</option>
                <option value="2">once a week</option>
                <option value="3">every day</option>
              </select>
            </span>
          </div>
        </div>
        <div className="has-text-centered">
          <a className="button is-primary is-large" onClick={this.handleSubmit}>Calculate</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('app'))