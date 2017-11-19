//import { fakeData } from '../Containers'

const newsReducer = (state = {news: [], page: 0}, action) => {
  //console.log('newsReducer', state)
  switch (action.type) {
    case "FETCH_NEWS_START": {
      return {...state}
    }
    case "FETCH_NEWS_ERROR": {
      return {...state}
    }
    case "RECEIVE_NEWS": {
      console.log('RECEIVE_NEWS', action.payload)
      //console.log("RECEIVE_NEWS", state.news)
      return {...state, news: state.news.concat(action.payload), page: action.page}
    }
    case "DELETE_NEWS": {
      //console.log("Delete News", action.payload, state)
      //return {...state, news: deleteNewsByID(state.news, action.payload) };
      return {...state, news: state.news.filter( news => news.objectID !== action.payload)}
    }
    case "UPDATE_NEWS": {
      //console.log("update reducer", action.payload)
      let indexState = state.news.findIndex( idx => idx.objectID === action.payload.objectID)

      const updateState = (state, indexState) => {
        return state.news.map( (news, index) => {
          if ( index !== indexState){
            return news
          }

          return {...news,
            objectID: action.payload.objectID,
            title: action.payload.title,
            content: action.payload.content,
            slug: action.payload.title.toLowerCase().replace(/\W+/g, "-")}
        })
      }
      return {...state, news: updateState(state, indexState)}
    }
    default: {
      return state
    }
  }
};

export default newsReducer
