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
  main: {
    item: null,
    isHeld: false
  },
  snack: {
    item: null,
    isHeld: false
  },
  drink: {
    item: null,
    isHeld: false
  }
};

export default () => {
  const [state, setState] = useState(initialState);

  const holdItem = id => {
    setState({
      ...state,
      [id]: {
        ...state[id],
        isHeld: !state[id].isHeld
      }
    });
  };

  const handleShuffle = () => {
    setState({
      main: {
        ...state.main,
        ...(!state.main.isHeld && {
          item: getRandomItem("main")
        })
      },
      snack: {
        ...state.snack,
        ...(!state.snack.isHeld && {
          item: getRandomItem("snack")
        })
      },
      drink: {
        ...state.drink,
        ...(!state.drink.isHeld && {
          item: getRandomItem("drink")
        })
      }
    });
  };

  const getRandomItem = reel => {
    const items = reels[reel].items;
    const min = 0;
    const max = items.length;

    // Your classic random number hack
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const randomItem = Math.floor(Math.random() * (max - min)) + min;

    return items[randomItem];
  };

  return (
    <div className="reel">
      <div className="reel__items">
        <Item
          label="Main"
          id="main"
          item={state.main.item}
          hold={holdItem}
          isHeld={state.main.isHeld}
        />
        <Item
          label="Snack"
          id="snack"
          item={state.snack.item}
          hold={holdItem}
          isHeld={state.snack.isHeld}
        />
        <Item
          label="Drink"
          id="drink"
          item={state.drink.item}
          hold={holdItem}
          isHeld={state.drink.isHeld}
        />
      </div>
      <button
        className="reel__btn"
        onClick={() => {
          handleShuffle();
        }}
      >
        Shuffle
      </button>
      <p>Press shuffle to get a random flavour. Click to hold.</p>
    </div>
  );
};
