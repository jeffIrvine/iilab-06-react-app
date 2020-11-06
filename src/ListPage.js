import './App.css';
import React from 'react';
import request from 'superagent';
import SomeComp from './SomeComp';

export default class ListPage extends React.Component {

  state = {
    hotSauces: []
}

componentDidMount = async () => {
    const response = await request.get('https://obscure-hamlet-18944.herokuapp.com/hot-sauce')

    this.setState({hotSauces: response.body});
}

render() {
    return (
        <div>
            {
                this.state.hotSauces.length > 0
                ? this.state.hotSauces.map(hotSauce => 
                <SomeComp 
                  uniqueId={hotSauce.id}
                  name={hotSauce.name}
                  scovilleScale={hotSauce.scoville_scale}
                  onSale={hotSauce.on_sale}
                  type={hotSauce.type}
                  ownerId={hotSauce.owner_id} 
                />)
                : 'loading!'
            }
        </div>
    )
}
}