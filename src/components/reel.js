import React, { useState } from "react";

import Item from "./item";

const reels = {
  main: {
    items: ["🐓", "🐄", "🐖", "🐟", "🧀", "🌱"]
  },
  snack: {
    items: ["🐓", "🐄", "🐖", "🐟", "🧀", "🌱", "🍫", "🍏"]
  },
  drink: {
    items: ["💦", "🍊", "🍋", "🍏", "🍫"]
  }
};

const initialState = {
  main: null,
  snack: null,
  drink: null
};

export default () => {
  const [state, setState] = useState(initialState);
  return (
    <div className="reel">
      <div className="reel__items">
        <Item label="Main" selection={state.main} />
        <Item label="Snack" selection={state.snack} />
        <Item label="Drink" selection={state.drink} />
      </div>
      <button
        className="reel__btn"
        onClick={() => {
          const getRandomItem = reel => {
            const items = reels[reel].items;
            const min = 0;
            const max = items.length;

            // Your classic random number hack
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const randomItem = Math.floor(Math.random() * (max - min)) + min;

            return items[randomItem];
          };

          setState({
            main: getRandomItem("main"),
            snack: getRandomItem("snack"),
            drink: getRandomItem("drink")
          });
        }}
      >
        Shuffle
      </button>
      <p>Press shuffle to get a random flavour</p>
    </div>
  );
};
