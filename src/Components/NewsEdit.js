import React from 'react'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateNews } from '../actions/newsAction'

function NewsEdit(props) {
  //console.log('News', props)

  if (typeof props.news !== 'undefined') {
    let test = props.news.filter( news => news.slug === props.match.params.objectID )

    let dummySubmit = e => {
      const dummyTitle = document.querySelector(".dummyTitle").value
      const dummyContent = document.querySelector(".dummyContent").value

      props.updateNews(test[0].objectID, dummyTitle, dummyContent)

      if (props.match.url !== "/") {
        return props.history.goBack()
      }
      //e.preventDefault()
    }

    if (test.length > 0) {
    return (
      <div>
        <h1>Edit {test[0].title}</h1>
        <hr/>
        <form className='edit-news'onSubmit={ e => dummySubmit(e)} >
          <label>
            Title: <br/>
            <input type='text' name='title' defaultValue={test[0].title} className='input-news dummyTitle' />
          </label>
          <br/>
          <label>
            Content: <br/>
            <textarea defaultValue={test[0].content}  className='input-news dummyContent'/>
          </label>
          <br/>
          <input type='submit' value='Submit' />
        </form>

        <Link to={test[0].url} target='_blank'>Read More... </Link><br/>
        <Link to='' onClick={() => props.history.goBack()}>Back </Link>

      </div>
    )

    }
    return 'oops'
  }

  return 'oops'
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
    updateNews
  }, dispatch);
}

export default connect( mapStateToProps, matchDispatchToProps )(NewsEdit);
