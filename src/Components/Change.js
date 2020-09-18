import { getNodeText } from '@testing-library/react'
import React, {Component} from 'react'

class Change extends Component {
  render() {
    return(
      <div>
        <div onClick={this.props.previousPage}> Previous </div>
        <section></section>
        <div onClick={this.props.nextPage}> Next </div>
      </div>
    )
  }
}

export default Change