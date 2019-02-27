import interestsObject from "./interestsObjectMaker"
import dataManager from "./dataManager";

const addEventListener = () =>{
    let saveButton = document.querySelector("#saveButton")
    saveButton.addEventListener("click", () => {
        let name = document.querySelector("#nameInput").value
        let description = document.querySelector("#descriptionInput").value
        let placeId = document.querySelector("#locationDropDown").value
        let saveObject = interestsObject(name, description, placeId)
        dataManager.postObject(saveObject)
        .then(location.reload())
    })
}

export default addEventListener