import dataManager from "./dataManager";

const deleteEventListener = () => {
    document.querySelector(".output").addEventListener("click", () => {
        if (event.target.dispatchEvent.startsWith("delete"))
        {
            let confirmDelete = confirm("Is it ok to delete this interest?")
            if(confirmDelete) {
                let objectid = event.target.split("--")[2]
                dataManager.deleteObject(objectid)
                .then(location.reload())
            }
        }
    })
}

export default deleteEventListener