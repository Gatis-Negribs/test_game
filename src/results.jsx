import React from 'react'

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
     };
  }

  componentDidMount() {
    let like = this.props.data.like ? 100 : 0;
    let smoking = this.props.data.smoking ? 50 : 0;
    let res = Math.round(((100 - parseInt(this.props.data.age)) * this.props.data.activity + like - smoking) / 3);
    if (res > 100) res = 100;
    if (res < 1) res = 5;
    this.setState({result: res})
  }

  share(res) {
    let message = 'My chances of being olympic champion is' + {res} +'%';
    FB.ui({
      method: 'share',
      quote: message
    }, function(response){});
  }

  render() {
    return (
      <div>
        <div className="container box has-text-centered section">
         <h1 className="title has-text-info">Your chances of being olympic champion is <b>{this.state.result}%</b></h1>
        </div>
        <div className="has-text-centered">
          <a className="button is-primary is-large" onClick={() => this.share(this.state.result)}>Share</a>
        </div>
      </div>
    );
  }
}

export default Results;