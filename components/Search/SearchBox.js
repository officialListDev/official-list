import React from 'react'

const SearchBox = () => (
  <form id="search-form">
    <input type="text" />
    <button type="submit">
      <img src="/static/img/search.svg" alt="search" />
    </button>
    <style jsx>{`
      #search-form {
        display: flex;
      }
      #search-form input {
        font-size: 14px;
        margin: 0;
        padding: 8px 11px;
        border-right: none;
        border-left: 1px solid #8E8E93;
        border-top: 1px solid #8E8E93;
        border-bottom: 1px solid #8E8E93;
        outline: none;
      }
      #search-form button {
        appearance: none;
        border-left: none;
        border-right: 1px solid #8E8E93;
        border-top: 1px solid #8E8E93;
        border-bottom: 1px solid #8E8E93;
        padding: 8px 11px;
        margin: 0;
        background: none;
      }
      #search-form img {
        width: 20px;
        height: auto;
      }
    `}</style>
  </form>
)

export default SearchBox
