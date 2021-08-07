const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // TODO: Update the Id's in thie object
    const newPie = {
      name: document.querySelector("#name").value,
      ingredients: document.querySelector("#ingredients").value,
      bakeTemp: document.querySelector("#bakeTemp").value,
      drinkPairing: document.querySelector("#drinkPairing").value,
      imageUrl: document.querySelector("#imageUrl").value,
      instructor: document.querySelector("#instructor").value,
      iceCream: document.querySelector("#iceCream").value
    };
    pies.push(newPie);
    pieBuilder(pies);
    // TODO: Add obj in newPie to the pies Array!
    // TODO: Render pies with the new pie to the DOM
  
    console.log(pies);
  };
  
  const deletePie = (event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
  
    if (targetType === "button") {
      pies.splice(targetId, 1);
      pieBuilder(pies);
    }
  };
  
  const pieFormEvents = () => {
    const pieFormElement = document.querySelector("#pieFormForm");
    pieFormElement.addEventListener("submit", handleFormSubmit);
  };
  
  const filterPies = (array, instructor) => {
    return array.filter((pieObject) => pieObject.instructor === instructor);
  };
  
  const handleButtonClick = (event) => {
    
    if (event.target.id === "All") {
      pieBuilder(pies);
    }
    if (event.target.id === "Trinity") {
      const trinPies = filterPies(pies, event.target.id);
      pieBuilder(trinPies);
    }
    if (event.target.id === "Aja") {
      const ajasPies = filterPies(pies, event.target.id);
      pieBuilder(ajasPies);
    }
    if (event.target.id === "Doc") {
      const docsPies = filterPies(pies, event.target.id);
      pieBuilder(docsPies);
    }
  };
  // Handles the button events
  const buttonEvents = () => {
    document
      .querySelector("#buttonContainer")
      .addEventListener("click", handleButtonClick);
  
    document.querySelector("#piesContainer").addEventListener("click", deletePie);
  };

  export {pieFormEvents, buttonEvents }; 