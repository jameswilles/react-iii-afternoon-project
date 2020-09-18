import React, {Component} from 'react';
import './App.css';
import Display from './Components/Display'
import Change from './Components/Change'

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
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1})
  }

  render() {
    return(
      <div className='App'>
        <header>
          <h1> Home </h1>
        </header>
        <section> 
          <Display page={this.state.page}/>
          <Change previous={this.previousPage} next={this.nextPage} />
        </section>
      </div>
    )
  }
}

export default App;
