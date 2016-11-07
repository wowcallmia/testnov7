import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifList from './GifList'
import * as GifActions from '../actions/GifActions';


class Gif extends Component {
Submit(e, serializedForm) {
  let { addGif } = this.props;
  e.preventDefault();
  addGif(serializedForm);
}

render() {
  let { gifs } = this.props;
  console.log('gifs: ', gifs);
    console.log('this.state:GIFPAGE ', this.state)
  return(
    <div>
      <div className='text-center' name='add'>
        <div className='row'>
          <h2 className='input-group'>Search...</h2>
        </div>
        <br />
        <div>
          <span className='input-group-addon'>Search..</span>
          <input type='text' className='form-control' ref='gif' />
        </div>
        <br />
        <button onClick={this.Submit.bind(this)} className='btn btn-default'>
          Submit
        </button>
      </div>
      <GifList />
    </div>
  )
}



}

let mapStateToProps = (state) => ({
  gifs: state.gifs
});

let mapDispatchToProps = (dispatch) => ({
  addGif(data) {
    dispatch(GifActions.addGif(data))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
