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

    deleteObject: (objectId) => {
        return fetch(`http://127.0.0.1:8080/interests/${objectId}`, {
            method: "DELETE"
        })
    },

    getPointsOfInterests: function () {
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(res => res.json()
        )
    }
}


export default dataManager