import placesObjectMaker from "./placesObjectMaker";
import dataManager from "./dataManager";

const mainPageHtml = () => {
    document.querySelector(".output").innerHTML +=

    dataManager.getPointsOfInterests()
    .then((places) => {
        places.forEach(place => { 
            let inputHTML =
    `
    <h1>Ternary Traveler Blog</h1>
    <fieldset>
    <label>Name</label>
    <input type="text" id="nameInput"></input>
    </fieldset>
    <fieldset>
    <label>Description</label>
    <input type="text" id="descriptionInput"></input>
    </fieldset>
    <fieldset>
    <label>Location</label>
    <select>
    <option value="
    
    </select>
    </fieldset>

    <article id="placesOutput"></article>
    `
placesObjectMaker()
        }
   )
})
}
export default mainPageHtml