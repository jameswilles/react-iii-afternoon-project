import React, {Component} from 'react';
import data from '../Assets/data';

class Display extends Component {

  render() {
    return(
      <div>
        <h1 className='name'>{data[this.props.page].name.first} {data[this.props.page].name.last}</h1>
    <p className='from'>From: {data[this.props.page].city}, {data[this.props.page].country}</p>
      </div>
    )
  }
}

export default Display