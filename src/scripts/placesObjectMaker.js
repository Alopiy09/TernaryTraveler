import dataManager from "./dataManager";
import interestsObjectMaker from "./interestsObjectMaker";


const placesObjectMaker = () => {
    document.querySelector("#placesOutput").innerHTML = ""

    dataManager.getPlacesToTravel()
        .then((places) => {
            places.forEach(place => {
                let placeObject =
                    `
            <h2>${place.name}</h2>
            <p id="interestsOutput><p<

            `
                console.log(placesObjectMaker)
                document.querySelector("#placesOutput").innerHTML += placeObject
            })
            interestsObjectMaker()
        }
    }


export default placesObjectMaker