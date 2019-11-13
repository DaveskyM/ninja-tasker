// Select Element, listening for Events, manipulating elements

// When we click on list item
const listItem = document.querySelector("ul");

listItem.addEventListener("click", function (event) {
    console.log(event.target);
    fetch("/delete/" + event.target.id, { method: "delete" })
        .then(res => {
            res.json();
        }).then(function () {
            event.target.parentNode.removeChild(event.target)
        })
});

// fire an event
// the event hits our server
