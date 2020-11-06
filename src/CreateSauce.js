import React, { Component } from 'react'
import request from 'superagent';
import { creatHotSauce, fetchType } from './fetches';



const someThingIDontUnderstand = {
    userId: 1
}

export default class CreateSauce extends Component {
    state = {
        types: [],
        name: '',
        scovilleScale: '', 
        onSale: '',
        typeId: '',
        ownerId: ''
    }

    componentDidMount = async () => {
        const types = await fetchType();

        this.setState({types})
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
            const sauce = await creatHotSauce(newHotSauce)

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
                Create a hot sauce!

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={e=> this.setState({name: e.target.value})} type=''/>
                    </label>
                    <label>
                        Scoville scale:
                        <input onChange={e=> this.setState({scovilleScale: e.target.value})} type=''/>
                    </label>
                    <label> On Sale
                    <select onChange={this.handleBoolean}>
                            
                            <option value={true}>True</option>
                            <option value={false}>false</option>
                    </select>
                    </label>
                    <label> Type:
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
            </div>
        )
    }
}
