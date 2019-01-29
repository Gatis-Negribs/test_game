import React from 'react'
import ReactDOM from 'react-dom'
import Results from './results'
import Select from './select'
import Radio from './radio'
require('./mystyles.scss')

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      activity: 0,
      smoking: false,
      like: false,
      submitted: false
    };

    this.handleAge = this.handleAge.bind(this);
    this.handleActivity = this.handleActivity.bind(this);
    this.handleSmoking = this.handleSmoking.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAge(event) {
    const regex = /^[0-9\b]+$/;
    const maxAge = 100;
    if ((event.target.value === '' || regex.test(event.target.value)) && event.target.value < maxAge) {
      this.setState({age: event.target.value})
    }
  }

  handleActivity(val) {
    this.setState({activity: val})
  }

  handleSmoking(val) {
    this.setState({smoking: val})
  }

  handleLike(val) {
    this.setState({like: val})
  }

  handleSubmit(event) {
    if(this.state.age == '') return;
    this.setState({submitted: true})
  }

  render() {
    if(this.state.submitted === true) {
      return (
        <Results data={this.state} />
      )
    }
    else {
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
          <Select callBack={this.handleActivity} />
          <Radio callBack={this.handleSmoking} question={"Are you smoking?"} />
          <Radio callBack={this.handleLike} question={"Do yo like sport?"} />
          <div className="has-text-centered">
            <a className="button is-primary is-large" onClick={this.handleSubmit}>Calculate</a>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<Game />, document.getElementById('app'))