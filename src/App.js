import './App.css';
import React from 'react';
import SomeComp from './SomeComp.js';
import fetch from 'superagent';

export default class App extends React.Component {


  state = {
      sauce: [],
}
  componentDidMount = async () => {
      const response = await fetch.get(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce`)
      this.setState({sauce: response.body})

  }
  render() {
    return (

      <div className="App">
        {
        this.state.sauce.map(sauce => 
        { return (
        <SomeComp 
        uniqueId={sauce.id}
        name={sauce.name}
        scovilleScale={sauce.scoville_scale}
        onSale={sauce.on_sale}
        type={sauce.type}
        ownderId={sauce.owner_id} />
        )
        })
        }

      </div>
    );
  }
}