import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as GifActions from '../actions/GifActions';

class GifList extends Component {
  constructor() {
    super();
    this.sorter = this.sorter.bind(this);
  }

  sorter(e) {
    console.log('sorting: ', sorting);
    this.setState({sort: e.target.innerHTML});
  }

  render() {
    let { gifs } = this.props;
     let { sort } = this.state;
     let {filter} = this.state;
     let filtered;
     if(filter === 'g') {
       filtered = tempRead
     }
    let sorted;
    if (sort === 'Name' ) {
      sorted = tempRead.sort((a,b) => {
        let a1 = a.name.toLowerCase();
        let b1 = b.name.toLoerCase();
        if(a1<b1) return -1;
        if(a1>b1) return 1;
        return 0;
      })
    }

    return(

      <div>
        <br /><br />
        {gifs ?
          <div>
            {gifs.map((gif) =>
              <div className = 'card col-c-4' key={gif.id}>
                <div>
                  <img id='' src={gif.image} alt='cap' />
                  <div className='card-block'>
                    <h4 className='card-title'>1</h4>
                    <p className='card-text'>2</p>
                  </div>
                  <ul ref='someid' value='gif.id' className='list-group list-group-flush'>
                    <li className='list-group-item'>3</li>
                    <li className='list-group-item'>4</li>

                  </ul>
                  <div className="card-block">
                  </div>

                </div>

              </div>

            )}
          </div>


          : <h4 className='text-center'>Search for a Gif...</h4>}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  gifs: state.gifs
});

let mapDispatchToProps = (dispatch) => ({
  setGif(gifId) {
    dispatch(GifActions.setGif(gifId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
