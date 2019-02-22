const dataManager = {
    getPlacesToTravel: function () {
    return fetch("http://localhost:8088/places/")
    .then(res => res.json()
    )
},
    getPointsOfInterests: function () {
        return fetch("http://localhost:8088/interests")
        .then(res => res.json()
        )
    }
}


export default dataManager