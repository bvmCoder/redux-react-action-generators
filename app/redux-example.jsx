var redux = require('redux');
var axios = require('axios');
console.log('Starting REDUX Example');

// pure function in REDUX is called reducer
var stateDefault = {
  name: "Anonymous",
  hobbies : [],
  movies : []
}
var nextHobbyId = 1;
var nextMovieId = 1;
var oldReducer = (state, action) => {
  state = state || stateDefault;
  //  it has default state when app is loaded first
  // console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter(function (hobby) {
            return hobby.id !== action.id;
          })
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        };
        case 'REMOVE_MOVIE':
          return {
            ...state,
            movies: state.movies.filter((movie) => movie.id !== action.id)
          };
    default:
      return state;
  }
};

// name reducer and action generators
// ------------------------------------------------
// action generators are very simple functions
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

// hobbies reducer and action generators
// ------------------------------------------------
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];

    case 'REMOVE_HOBBY':
      return state.filter(function (hobby) {
        return hobby.id !== action.id;
      });
    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby,
  }
}

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// movies reducer and action generators
// ------------------------------------------------
var moviesReducer= (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];

    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  };
}

// map reducer and action generators
// ------------------------------------------------

var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
}
var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

var compleLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios
    .get('http://ipinfo.io')
    .then(function (res) {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';
      store.dispatch(compleLocationFetch(baseUrl + loc))
    })
}

// ------------------------------------------------
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});
// var store = redux.createStore(reducer);
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  // console.log('Name is: ', state.name);
  // document.getElementById('app').innerHTML = state.name;
  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading ...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href=' + state.map.url + '>View Your Location</a>';
  }
  console.log('New State is:', state);
});

var currentState = store.getState();
console.log('CurrentState', currentState);
fetchLocation();
store.dispatch(changeName('React'));

var action = {
  type: 'CHANGE_NAME',
  name : 'React'
};
store.dispatch(action);
store.dispatch({
  type: 'CHANGE_NAME',
  name : 'Royal Dansk'
});

// unsubscribe();
/*
store.dispatch({
  type: 'CHANGE_NAME',
  name : 'React'
});
*/
store.dispatch(changeName('Dixit Patel'));
store.dispatch(addHobby('Programming'));
store.dispatch(addHobby('Reading'));
store.dispatch(removeHobby(1));

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Watch Movies'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 3
});
store.dispatch(changeName('Redux Angular'));
store.dispatch(addMovie('StarWars', 'Action'));
store.dispatch(addMovie('The NoteBook', 'Drama'));


store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Titanic',
  genre: 'Romantic'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'M.I.-3',
  genre: 'Action'
});
store.dispatch(removeMovie(1));
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Kabil',
  genre: 'Drama'
});
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 3
});



console.log('New Action: CHANGE_NAME', store.getState());
