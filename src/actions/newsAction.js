import axios from 'axios'

const newsData = (result) => {
  var fixdata = []
  fixdata = result.map( rslt => {
    var abc = {};
    abc.objectID = rslt.objectID
    abc.title = rslt.title
    abc.url = rslt.url
    abc.slug = rslt.title.toLowerCase().replace(/\W+/g,"-")
    abc.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    abc.created_at = rslt.created_at
    abc.author = rslt.author
    return abc
  })
  return fixdata
}

export const getNews = (page) => {
  let url = "https://hn.algolia.com/api/v1/search?query=redux&hitsPerPage=10&page="+page
  return function (dispatch){

    axios.get(url)
      .then((response) => response.data.hits)
      .then( result => newsData(result))
      .then(resl => {        
        dispatch({type: "RECEIVE_NEWS", payload: resl, page: page+1});
      })
      .catch((error) => {
        dispatch({type: "FETCH_NEWS_ERROR", payload: error})
      });
  }
}

export const deleteNews = (objectID) => {
  return {
    type: "DELETE_NEWS",
    payload: objectID
  }
}

export const updateNews = (objectID, title, content) => {
  //console.log("newsActions", objectID, title, content)
  return {
    type: "UPDATE_NEWS",
    payload: {objectID, title, content}
  }
}
