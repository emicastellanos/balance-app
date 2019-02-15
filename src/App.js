import React, { Component } from 'react';
import GastoPanel from './components/GastoPanel/GastoPanel';
import ItemList from './components/ItemList/ItemList';
import Resumen from './components/Resumen/Resumen';
import Header from './components/Header/Header';

import './App.css';

const item1 = {
  amount:"10",
  desc:"pizas",
  date:"20/01/19",
  category:"alimento",
  done:"x"
}

const item2 = {
  amount:"25",
  desc:"mambo",
  date:"22/01/19",
  category:"gilada",
  done:" "
}

const item3 = {
  amount:"25",
  desc:"mambopppp",
  date:"22/01/18",
  category:"GIL",
  done:" "
}


class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      day: new Date(),
      amount:0,
      desc:'',
      category:'',
      items:[item1,item2,item3]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  dateUpdate = (event) => {
    this.setState({day:event});
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }

  handleSubmit = (event) => {
    console.log(this.state.day);
    this.setState( () => {
      const lista = this.state.items.concat(
        [{"amount":this.state.amount,
        "desc":this.state.desc,
        "category":this.state.category
        }]);
      return ({items:lista}); //le mando return para que vuelva a renderizar mi "App"
    });
    
  }



  render() {
    return (
      <div className="App">
      <Header />
        <div className="alineado" >
          <GastoPanel today={this.state.day} dateUpdate={this.dateUpdate} onChange={this.handleChange} confirmClick={this.handleSubmit} />
          <ItemList items={this.state.items}/>
          <Resumen />
        </div>
        {/* <IngresoPanel/>
          <ListadoPanel/> */}
      </div>
    );
  }
}

export default App;