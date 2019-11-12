import {combineReducers} from 'redux'

const booksReducer = () => {
    return[
        {title: 'WEB601', notes: "book1"},
        {title: 'WEB602', notes: "book2"},
        {title: 'WEB603', notes: "book3"}
    ]
}

const secondBookReducer = (selectedBook = null, action) =>{
    if (action.type === 'BOOK_SELECTED'){
        return action.payload
    }
    return selectedBook
}

export default combineReducers({
    books: booksReducer,
    selectedBook: secondBookReducer
})