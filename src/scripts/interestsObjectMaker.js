
const interestsObjectMaker = () ={
dataManager.getPointsOfInterests()
.then((interests) => {
    interests.forEach(interest => {
        let placeInterests =
             `
<p>${interest.name}</p>
`
        document.querySelector("#interestsOutput").innerHTML += placeInterests
    })
})
}
export default interestsObjectMaker