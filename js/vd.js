{
    var dragstart = function dragstart(event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    var dragover = function dragover(event) {
        if (event.target.nodeName.toLowerCase() === "img") {
            return true;
        }

        event.preventDefault();
    };

    var drop = function drop(event) {
        event.preventDefault();
        var imageId = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(imageId));
    };

    var cells = document.getElementsByClassName("col");
    Array.from(cells).forEach(function(element) {
        element.addEventListener('dragover', dragover);
        element.addEventListener('drop', drop);
    });
    var images = document.getElementsByTagName("img");
    Array.from(images).forEach(function(element) {
        element.addEventListener('dragstart', dragstart);
    });


}