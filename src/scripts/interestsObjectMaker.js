//function to make an object out of the interests in the API//
const interestsObject = (name, description, placeId) => {
    let interestsObject = {
        name: name,
        description: description,
        placeId: placeId
    }
    return interestsObject
}

export default interestsObject