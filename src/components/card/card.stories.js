import "./card.css";
import cardThai from "./card-thai.html";
import cardItalian from "./card-italian.html";
import cardCake from "./card-cake.html";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const thai = () => cardThai;
export const italian = () => cardItalian;
export const cake = () => cardCake;
