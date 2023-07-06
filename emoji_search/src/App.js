import React, { useState } from "react";
import ReactDOM from "react-dom";

import emojiJson from "./data/emoji.json";

import Header from "./components/Header";
import Search from "./components/Search";
import EmojiList from "./components/EmojiList";
import Modal from "./components/Modal";

function App() {
  const [keyword, setKeyword] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <Modal onToggle={setToggle} />}
      <Header />
      <Search onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} onToggle={setToggle} keyword={keyword} />
    </>
  );
}

export default App;
