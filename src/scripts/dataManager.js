const dataManager = {
    postObject: (saveObject) => {
        return fetch ("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(saveObject)
    })
    },




    getPointsOfInterests: function () {
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(res => res.json()
        )
    }
}


export default dataManager