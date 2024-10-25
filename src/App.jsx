import "./styles.css";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["りんご", "バナナ", "ぶどう", "みかん", "メロン"];

  // 検索フィルタのロジック
  const filteredItems = items.filter((item) => item.includes(searchTerm));

  return (
    <div>
      <h1>検索フィルタアプリ</h1>
      <div className="container">
        {/* SearchBarに検索処理関数を渡す */}
        <SearchBar onSearch={setSearchTerm} />
        {/* ItemListにフィルタリングされたアイテムを渡す */}
        <ItemList items={filteredItems} />
      </div>
    </div>
  );
}

export default App;
