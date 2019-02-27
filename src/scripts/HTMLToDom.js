import dataManager from "./dataManager"
import interestsToHTML from "./interestsToHTML";

let outputContainer = document.querySelector("#output")

const interestsToDom = () => {
    dataManager.getPointsOfInterests()
        .then((arrayOfInterest) => {
            arrayOfInterest.forEach(interest => {
                outputContainer.innerHTML += interestsToHTML(interest)
            })
        })
}
export default interestsToDom