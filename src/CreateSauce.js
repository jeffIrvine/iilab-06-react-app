import React, { Component } from 'react'
import request from 'superagent';


const someThingIDontUnderstand = {
    userId: 1
}

export default class CreateSauce extends Component {
    state = {
        types: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://obscure-hamlet-18944.herokuapp.com/hot-sauce')

        this.setState({types: response.body})
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newHotSauce = {
            name: this.state.name,
            scoville_scale: this.state.scovilleScale,
            on_sale: this.state.onSale,
            type_id: this.state.typesId,
            owner_id: someThingIDontUnderstand.userId
        };

        await request
            .post('https://obscure-hamlet-18944.herokuapp.com/hot-sauce')
            .send(newHotSauce);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({typesId: e.target.value});
    }
    render() {
        return (
            <div>
                Create a Hot Sauce!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={e=> this.setState({name: e.target.value})} type=''/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
