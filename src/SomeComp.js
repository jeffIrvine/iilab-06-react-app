import React, { Component } from 'react';


export default class SomeComp extends Component {

    render() {
        return (
            <div>
                <p> {this.props.uniqueId} </p>
                <p> Name: {this.props.name} </p>
                <p> Scoville Scale: {this.props.scovilleScale} </p>
                <p> On Sale: {this.props.onSale} </p>
                <p> Type: {this.props.type} </p>
                <p> Owner Id: {this.props.ownerId} </p>
            </div>
        )
    }
}
