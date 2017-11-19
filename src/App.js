import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';

import { HomePage, News, NewsEdit } from './Components';
import { getNews } from './actions/newsAction'

import { bindActionCreators} from "redux";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount(){
    this.props.getNews(this.props.page)
    //console.log(this)
  }
  render() {
    //console.log("App",this)

    let loadMore = ""
    if (this.props.location.pathname === "/") {
      loadMore = <Link to="" onClick={() => this.props.getNews(this.props.page)}  className="buttonMore">Load More...</Link>
    }
    return (
      <div>
        <h1><Link to="/"><em>Hacker News</em> Kawe</Link></h1>

        <Switch>
          <Route path="/read/:objectID" component={(props) => <News {...props} news={this.props.news}/>} />
          <Route path="/edit/:objectID" component={(props) => <NewsEdit {...props} news={this.props.news}/>} />
          <Route path="/" component={(props) => <HomePage {...props} news={this.props.news} />} exact />
        </Switch>

        {loadMore}
      </div>
    );
  }
}

//export default App;
const mapStateToProps = state => {
  //console.log("APP mapStateToProps", state)
  return {
    //news: state.news
    news: state.news,
    page: state.page
  }
}

//listen to action
const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    getNews
  }, dispatch);
}

export default connect( mapStateToProps, matchDispatchToProps )(App);
