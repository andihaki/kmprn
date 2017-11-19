import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsEdit(props) {
  console.log("News", props)
  // const isPlayer = p => props.news === props;
  // return props.news.find(isPlayer)
  if (typeof props.news !== 'undefined') {
    //console.log(props.match.params.objectID)
    //return props.news.filter((news) => news.slug === props.match.params.objectID)
    let test = props.news.filter( news => news.slug === props.match.params.objectID );
    //console.log(test)
    //{props.history.go(props.match.url)}
    return (
      <div>
        <h1>Edit {test[0].title}</h1>
        <hr/>
        <form className="edit-news" onSubmit="#">
          <label>
            Title: <br/>
            <input type="text" name="title" defaultValue={test[0].title} className="input-news"/>
          </label>
          <br/>
          <label>
            Content: <br/>
            <textarea defaultValue={test[0].content}  className="input-news"/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>

        <Link to={test[0].url} target="_blank">Read More... </Link><br/>
        <Link to="" onClick={() => props.history.goBack()}>Back </Link>

      </div>
    )
  }

  return "oops"
}
