import React from 'react';

class GetFortune extends React.Component {
    state = {
    fortune: [
      {
        message:'',
      }
    ]
    }

    componentDidMount() {
      fetch('GET', 'http://fortunecookieapi.com/v1/cookie?fortuneId=')
      .then(response => response.json())
      .then(response => {
        this.setState({
          fortune: response.fortune
        })
      })
      .catch(err => { console.log(err);
      })
    }


    render() {
      const {fortune} = this.state
      const {message} = fortune;
      return (
        <p>
          {message}
        </p>
      );
    }
}

export default GetFortune