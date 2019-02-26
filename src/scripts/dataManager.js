const dataManager = {
    getPointsOfInterests: function () {
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(res => res.json()
        )
    }
}


export default dataManager