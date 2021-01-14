import React from "react"

export default class FetchApi extends React.Component {
  state = {
    loading: true,
    person: null,
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ person: data.results[0], loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>
    }

    return (
      <div>
        <hr></hr>
        <h1>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h1>
        <img src={this.state.person.picture.large} />
        <div>Gender: {this.state.person.gender}</div>
        <div>Email: {this.state.person.cell}</div>
        <div>Email: {this.state.person.email}</div>
        <div>Nationality: {this.state.person.nat}</div>
      </div>
    )
  }
}
