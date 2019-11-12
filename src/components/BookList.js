import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'

class BookList extends React.Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <div className="item" key={book.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            onClick={() => this.props.selectBook(book)}
                        >
                            Details
                        </button>
                    </div>
                    <div className="content">{book.title}</div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {books : state.books}
}


// This saying that if anything is pulled inside the default function call 
// the second function 'BookList as well.
export default connect(mapStateToProps, {
    selectBook
})(BookList)