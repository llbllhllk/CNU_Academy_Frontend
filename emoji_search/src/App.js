import React, { useState } from "react";

import emojiJson from "./data/emoji.json";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import EmojiList from "./components/EmojiList";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </>
  );
}

export default App;
