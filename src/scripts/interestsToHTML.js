//takes the interestObject and converts it to html//
let interestsToHTML = (interest) => {

    return `
    <section id="interest${interest.id}">
    <h1>${interest.name}</h1>
    <article>${interest.description}</article>
    <div>Place to visit:${interest.place.name}</div>
    <button id="deleteButton${interest.id}>Delete</button>
    </section>
    `
}

export default interestsToHTML