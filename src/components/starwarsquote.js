import React from "react"

export default class StarWarsQuote extends React.Component {
  state = {
    loading: true,
    starWarsQuote: null,
  }

  async componentDidMount() {
    const url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ starWarsQuote: data, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.starWarsQuote) {
      return <div>didn't get a Star Wars quote.</div>
    }

    return (
      <div>
        <hr></hr>
        <div>{this.state.starWarsQuote.content}</div>
      </div>
    )
  }
}