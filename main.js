import { pies } from "./data.js";
import { buttons, pieBuilder, pieForm } from "./domMethods.js";
import { pieFormEvents, buttonEvents} from "./handleEvents.js";


const init = () => {
  // this starts the app
  buttons(); // PUT DOM ELEMENTS FIRST
  buttonEvents(); // EVENT LISTNERS AFTER
  pieBuilder(pies);
  pieForm();
  pieFormEvents();
};

init();
