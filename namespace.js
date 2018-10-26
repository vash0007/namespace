var VIRAJVASHI = {
    init: function () {

        let Box = document.createElement("div");
        Box.className = "box";
        Box.textContent = "virajvashi";
        let Boxes = document.getElementById("boxes");
        Boxes.appendChild(Box);

        Box.addEventListener("click", function () {
            Box.style.borderColor = "Black";
            Box.style.backgroundColor = "Yellow";
            //Box.textContent = "virajvashi";
        });


        Box.addEventListener("mouseover", function () {
            Box.classList.toggle("highlight");
        });
        Box.addEventListener("mouseout", function () {
           Box.classList.toggle("highlight");
            Box.style.borderColor = "Black";
            Box.style.backgroundColor = "Yellow";
            Box.removeAttribute("style");
        });




    }
};
