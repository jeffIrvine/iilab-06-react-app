import './App.css';
import React from 'react';
import request from 'superagent';
import SomeComp from './SomeComp';
import { Link } from 'react-router-dom'

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
                <Link to={`/update/${hotSauce.id}`}>
                  <SomeComp 
                      uniqueId={hotSauce.id}
                      name={hotSauce.name}
                      scovilleScale={hotSauce.scoville_scale}
                      onSale={hotSauce.on_sale}
                      type={hotSauce.type}
                      ownerId={hotSauce.owner_id} 
                      />
                  </Link>
                  )
                : 'loading!'
            }
        </div>
    )}
}