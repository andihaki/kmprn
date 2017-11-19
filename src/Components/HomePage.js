import React from 'react'
import { Link } from 'react-router-dom'

import { deleteNews } from '../actions/newsAction'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function HomePage(props) {
  //console.log('HomePage', props)

  if (typeof props.news !== 'undefined') {
    const listItems = props.news.map((data) =>
      <li key={data.objectID} className='newslist news'>
        <Link to={props.match.url + 'edit/' + data.slug}>Edit</Link>
        <Link to='' onClick={(e) => (window.confirm("Delete news "+data.title) === true) ? props.deleteNews(data.objectID) : e.preventDefault()}>
        Delete
        </Link>
        <Link to={props.match.url +'read/'+ data.slug}>{data.title}</Link>
      </li>
    );
    return (
    <ul>{listItems}</ul>
  );
  }
  return <p>Loading...</p>
}

//export default HomePage
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

export default connect( mapStateToProps, matchDispatchToProps )(HomePage);
