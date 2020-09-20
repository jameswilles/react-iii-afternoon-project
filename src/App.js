import React, {Component} from 'react';
import './App.css';
import Display from './Components/Display'
import Change from './Components/Change'
import data from './Assets/data'

class App extends Component{
  constructor() {
    super()

    this.state = {
      page: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  nextPage() {
    if(this.state.page === data.length - 1) {
      this.setState({ page: 0 })
    } else {
      this.setState({ page: this.state.page + 1 })
    }
  }

  previousPage() {
    if(this.state.page === 0) {
      this.setState({ page: data.length - 1})
    } else {
      this.setState({ page: this.state.page - 1})
    }
  }

  render() {
    return(
      <div className='App'>
        <header>
          <h1 id='home'> Home </h1>
        </header>
        <section> 
          <Display page={this.state.page}/>
          <Change previousPage={this.previousPage} nextPage={this.nextPage} />
        </section>
      </div>
    )
  }
}

export default App;
