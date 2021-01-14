import React from "react"

export default class PuppyApi extends React.Component {
    state = {
        loading: true,
        puppy: null,
    }

    async componentDidMount() {
        const url = "https://dog.ceo/api/breeds/image/random"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ puppy: data, loading: false })
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.puppy) {
            return <div>didn't get a puppy</div>
        }

        return (
            <div>
                <hr></hr>
                <img src={this.state.puppy.message} />
                <div>"status": {this.state.puppy.status}</div>
            </div>
        )
    }
}
