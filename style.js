
function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}

// Menu click செய்ததும் close ஆகும்

const menuItems = document.querySelectorAll("#navLinks a");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});
