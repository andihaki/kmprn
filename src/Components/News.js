import React from 'react'
import { Link } from 'react-router-dom'

export default function News(props) {
  //console.log("News", props)
  if (typeof props.news !== 'undefined') {
    let test = props.news.filter( news => news.slug === props.match.params.objectID );

    if (test.length > 0) {
      return (
        <div>
          <h1>{test[0].title}</h1>          
          <hr/>
          <p>Written by : {test[0].author}, at: {test[0].created_at}</p>
          <p>{test[0].content} </p>

          <Link to={test[0].url} target="_blank">Read More... </Link><br/>
          <Link to="" onClick={() => props.history.goBack()}>Back </Link>

        </div>
      )
    }
    return 'oops'
  }

  return "oops"
}
