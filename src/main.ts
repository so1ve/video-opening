import TypeIt from "typeit";

import "./style.css";

const typeit = new (TypeIt as any)("#typing", {
  speed: 80,
  startDelay: 1000,
});

function makeColorString (str: string, color: string) {
  return `<span class="${color}">${str}</span>`;
}

typeit
  .type("$ ", { instant: true })
  .pause(1500)
  .type("who")
  .pause(250)
  .type(makeColorString("ami # :-D", "gray"), { instant: true })
  .pause(600)
  .delete(9, { instant: true })
  .type("ami", { instant: true })
  .type(makeColorString(" # :-D", "green"), { instant: true })
  .pause(500)
  .break()
  .break()
  .pause(2000)
  .type("korniel")
  .pause(1000)
  .delete(7)
  .pause(1500)
  .type(makeColorString("KO", "red"))
  .type("rniel.")
  .pause(2000)
  .delete()
  .go();
