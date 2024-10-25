import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="検索..."
      onChange={(e) => onSearch(e.target.value)} // 親コンポーネントに入力値を渡す
    />
  );
}

export default SearchBar;
