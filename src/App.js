import React from 'react';
import Cat from './Cat';
import {connect} from 'react-redux';
import {addCat} from './Cat/actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    let randomCatIds = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    
    randomCatIds.forEach(catId => this.props.addCat(
      {
        catId: catId,
        meows: 0,
        comments: []
      }
    ))
  }

  render() {
    return (
      <div className="app">
        {this.props.cats.map((cat, id) =>   
          <Cat key={id} cat={cat}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.catReducer.items
  }
}

const mapDispatchToProps = { addCat }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export const RawApp = App;
