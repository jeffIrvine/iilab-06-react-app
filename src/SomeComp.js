import React, { Component } from 'react'
import fetch from 'superagent'

export default class SomeComp extends Component {
    state = {
        sauce: [],
 }
    // componentDidMount = async () => {
    //     await this.fetchSauce();
 
    // }

// fetchSauce = async () => {
//     this.setState({loading: true })

//     const response = await fetch.get(`https://alchemy-Saucedex.herokuapp.com/api/Saucedex?Saucemon=${this.props.match.params.Saucemon}`)
    
//     this.setState({
//         pokeData: response.body.results,
//         loading: false,
//     })
}

    render() {
        return (
            <div>

            </div>

        )
    }
}
