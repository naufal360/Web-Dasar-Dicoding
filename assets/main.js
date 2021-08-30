let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "saul") {
            event.target.setAttribute("src", "assets/image/saul1.jpg");
            return;
        } else if (event.target.id === "pjanic") {
            event.target.setAttribute("src", "assets/image/pjanic1.jpg");
            return;
        } else if (event.target.id === "umtiti") {
            event.target.setAttribute("src", "assets/image/umtiti1.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "saul") {
            event.target.setAttribute("src", "assets/image/saul.jpg");
            return;
        }
        if (event.target.id === "pjanic") {
            event.target.setAttribute("src", "assets/image/pjanic.jpeg");
            return;
        }
        if (event.target.id === "umtiti") {
            event.target.setAttribute("src", "assets/image/umtiti.jpg");
            return;
        }
    });
}