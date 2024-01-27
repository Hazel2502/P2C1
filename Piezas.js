document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".chess-board");

    const pieces = [
        "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
        "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
        "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
    ];

    for (let i = 0; i < 64; i++) {
        const square = document.createElement("div");
        square.classList.add("square", (i + Math.floor(i / 8)) % 2 === 0 ? "white" : "black");
        square.innerText = pieces[i];
        board.appendChild(square);
    }
});
