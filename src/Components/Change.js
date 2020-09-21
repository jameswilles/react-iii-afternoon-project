import { getNodeText } from '@testing-library/react'
import React, {Component} from 'react'

class Change extends Component {
  render() {
    return(
      <div className='change-buttons'>
        <div onClick={this.props.previousPage}> Previous </div>
        <section>
          <div className='edit-button'> Edit </div>
          <div className='edit-button'> Delete </div>
          <div className='edit-button'> New </div>
        </section>
        <div onClick={this.props.nextPage}> Next </div>
      </div>
    )
  }
}

export default Change