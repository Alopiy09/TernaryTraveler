//function to make an object out of the interests in the API//
const interestsObject = (name, description, placeID) => {
    let interestsObject = {
        placeID: placeID,
        name: name,
        description: description
    }
    return interestsObject
}

export default interestsObject