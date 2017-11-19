import React from 'react'
import { Link } from 'react-router-dom'

import { deleteNews } from '../actions/newsAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function News(props) {
  console.log('News', props)
  if (typeof props.news !== 'undefined') {
    let test = props.news.filter( news => news.slug === props.match.params.objectID );
    //let r = confirm("Press a button!")
    if (test.length > 0) {

      return (
        <div>
          <h2>{test[0].title}</h2>
          <hr/>
          <div>
            Written by: {test[0].author}, at: {test[0].created_at} &nbsp;
            <Link to={(props.match.url).replace('read', 'edit')}>Edit</Link> &nbsp;
            <Link to='' onClick={(e) => (window.confirm("Delete news "+test[0].title) === true) ? props.deleteNews(test[0].objectID) : e.preventDefault()}>
              Delete
            </Link>
          </div>
          <p>{test[0].content} </p>

          <Link to={test[0].url} target='_blank'>Read More... </Link><br/>
          <Link to='' onClick={() => props.history.goBack()}>Back </Link>

        </div>
      )
    }
    return 'oops'
  }

  return 'oops'
}


//export default state
const mapStateToProps = state => {
  return {
    state
  }
}
//listen to action
const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteNews
  }, dispatch);
}

export default connect( mapStateToProps, matchDispatchToProps )(News);
