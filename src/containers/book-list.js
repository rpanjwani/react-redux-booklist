import React, {Component} from 'react'
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//whatever returned is used as props on BookList container
//i.e. this.props.selectBook
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result is passed to all the reducers
  //by using dispatch
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote BookList from a component to a container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
