const game = new YatzyGame();

document.getElementById("new-game").addEventListener("click", () => game.startNewGame());
document.getElementById("roll-dice").addEventListener("click", () => game.rollDice());
document.getElementById("keep-dice").addEventListener("click", () => {
    document.querySelectorAll(".dice").forEach((element, index) => {
        element.addEventListener("click", () => {
            game.keepDice(index);
            element.classList.toggle("selected");
        });
    });
});
document.getElementById("end-turn").addEventListener("click", () => game.endTurn());

function selectCategory(category) {
    game.selectCategory(category);
}

// Additional Event Listener for removing kept dice
document.querySelectorAll(".kept-dice").forEach((element, index) => {
    element.addEventListener("click", () => {
        game.keepDice(game.keptDiceIndices[index]);
    });
});