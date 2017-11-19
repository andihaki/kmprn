import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fakeData } from '../Containers'
import axios from 'axios'

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {newsData: fakeData};
  }
  componentDidMount(){
    const newsData = (result) => {
      var fixdata = []

      fixdata = result.map( rslt => {
        var abc = {};
        abc.objectID = rslt.objectID
        abc.title = rslt.title
        abc.url = rslt.url

        return abc
      })
      //console.log(fixdata)
      this.setState({ newsData: fixdata})
      //return fixdata

    }
    axios.get("https://hn.algolia.com/api/v1/search?query=react")
      .then((response) => response.data.hits)
      .then( result => { return newsData(result)})
      .catch((error) => {
        //dispatch({type: "FETCH_NEWS_ERROR", payload: error})
        console.log("error", error);
      })
  }
  render() {
    //console.log("NewsList", this.props)
    if (this.props.match.url === "/" || this.props.match.url === "//") this.props.match.url = "read"
    //console.log("NewsList state", this.state)
    //const newsList = this.state.newsData.map( data => {
    var newsList = null;
    newsList = this.state.newsData.map( data => {
      return (
        <li key={data.objectID} className="news">
          <Link to="#">Edit</Link>
          <Link to="#">Delete</Link>
          <Link to={this.props.match.url +"/"+ data.title.toLowerCase().replace(/\W+/g,"-")} className="active">{data.title}</Link>
        </li>
      )
    })

    return (
      <div>
        <ul className="newslist">
          {newsList}
        </ul>
      </div>
    )
  }
}
