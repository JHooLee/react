import React, {Component} from "react";

function Book({title, author, summary, genre, release, isbn}){
    return(
        <>
            <h3>title: {title}</h3>
            <h3>author: {author}</h3>
            <h3>summary: {summary}</h3>
            <h3>genre: {genre}</h3>
            <h3>release: {release}</h3>
            <h3>isbn: {isbn}</h3>
        </>
    )
}

export default Book;