import { atom, selector } from "recoil";

let visible = atom({
  key: "show",
  default: true,
});

let nextpopupvisible = atom({
  key: "nextpopup",
  default: false,
});

export { visible , nextpopupvisible };
