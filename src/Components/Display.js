import React, {Component} from 'react';
import data from '../Assets/data';

class Display extends Component {

  render() {
    let displayedUser = data[this.props.page]

    return(
      <div className='display-div'>
        <h1 className='user-name'>{displayedUser.name.first} {displayedUser.name.last}</h1>
        <section>
          <h4 className='personal-info'> From: </h4>
          <p className='personal-info'>{displayedUser.city}, {displayedUser.country}</p>
        </section>
        <section>
          <h4 className='personal-info'> Job Title: </h4>
          <p className='personal-info'>{displayedUser.title}</p>
        </section>
        <section>
          <h4 className='personal-info'> Employer: </h4>
          <p className='personal-info'>{displayedUser.employer}</p>
        </section>
        <section>
          <h2> Favorite Movies: </h2>
          <p> 1. {displayedUser.favoriteMovies[0]}</p>
          <p> 2. {displayedUser.favoriteMovies[1]}</p>
          <p> 3. {displayedUser.favoriteMovies[2]}</p>
        </section>
      </div>
    )
  }
}

export default Display