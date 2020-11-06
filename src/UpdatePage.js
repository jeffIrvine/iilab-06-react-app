import React, { Component } from 'react'
import request from 'superagent';
import { deleteHotSauce, fetchOneHotSauce, fetchType } from './fetches';


const someThingIDontUnderstand = {
    userId: 1
}

export default class CreateSauce extends Component {
    state = {
        types: [],
        hotSauces: {},
        name: '',
        scovilleScale: 1, 
        onSale: false,
        typeId: 1,
        ownerId: 1
    }

    componentDidMount = async () => {
        const hotSauces = await fetchOneHotSauce(this.props.match.params.id);
        const types = await fetchType();

        this.setState({types, hotSauces})
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
            .put(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce/${this.props.match.params.id}`)
            .send(newHotSauce);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({typesId: e.target.value});
    }
    handleBoolean = (e) => {
        this.setState({onSale: e.target.value});
    }
    render() {
        return (
            <div>
                Update a hot sauce!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.name} onChange={e=> this.setState({name: e.target.value})} type=''/>
                    </label>
                    <label>
                        Scoville Scale:
                        <input onChange={e=> this.setState({scovilleScale: e.target.value})} type=''/>
                    </label>
                    <label>
                        <select onChange={this.handleBoolean}>
                            
                                <option value={true}>True</option>
                                <option value={false}>false</option>
                        </select>
                    </label>
                    <label>
                        <select onChange={this.handleChange}>
                            {
                                this.state.types.map(type => <option
                                    selected={this.state.typeId === type.id}
                                    key={type.id}
                                    value={type.id}>{type.type}
                                    </option>
                                    )
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
                    <button onClick={()=> {
                        deleteHotSauce(this.props.match.params.id);  
                        this.props.history.push('/')}}>Delete
                        </button>
            </div>
        )
    }
}
