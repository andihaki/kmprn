import React from 'react'
import { Link } from 'react-router-dom'

import { deleteNews } from '../actions/newsAction'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//import { NewsEdit } from './index';

function HomePage(props) {
  //console.log(typeof props.news === 'undefined' ? "oops" : props);
  //console.log("HomePage", props)

  //stinky tricks :)
  //if (props.match.url === "/" || props.match.url === "//"|| props.match.url === "/read") props.match.url = "read/"
  if (typeof props.news !== 'undefined') {
    return (
      props.news.map( data => {
        return (
          <li key={data.objectID} className="newslist news">
            <Link to={props.match.url + "edit/" + data.slug}>Edit</Link>
            <Link to="" onClick={() => props.deleteNews(data.objectID)}>Delete</Link>
            <Link to={props.match.url +"read/"+ data.slug}>{data.title}</Link>
          </li>
        )
      })
    )
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
