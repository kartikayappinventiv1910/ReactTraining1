import Data from "./data";

export const initialColorState = {
  colorsData: Data,
};

export const initialThemeState = {
  Theme: { color: "black", backgroundColor: "yellow" },
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "ChangeTheme":
      return {
        ...state,
        Theme:
          state.Theme.backgroundColor === "black"
            ? { color: "black", backgroundColor: "yellow" }
            : { color: "white", backgroundColor: "black" },
      };

    default:
      return state;
  }
};