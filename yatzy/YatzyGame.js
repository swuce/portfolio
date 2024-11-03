class YatzyGame {
    constructor() {
        this.rollCount = 0;
        this.dice = new Dice();
        this.score = 0;
        this.scoreOptions = {
            ones: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            threeOfAKind: null,
            fourOfAKind: null,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            chance: null,
            yahtzee: null
        };
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('roll-dice').addEventListener('click', () => this.rollDice());
        document.getElementById('keep-dice').addEventListener('click', () => this.keepSelectedDice());
        document.getElementById('end-turn').addEventListener('click', () => this.endTurn());
        document.getElementById('new-game').addEventListener('click', () => this.resetGame());

        // Add event listeners for dice
        Array.from(document.getElementsByClassName('dice')).forEach((dice, index) => {
            dice.addEventListener('click', () => this.toggleSelectDice(index));
        });

        // Adding event listeners for score options
        Object.keys(this.scoreOptions).forEach(option => {
            document.getElementById(option).addEventListener('click', () => this.selectScoreOption(option));
        });
    }

    rollDice() {
        if (this.rollCount >= 3) {
            alert("You can only roll three times per turn.");
            return;
        }
        
        this.dice.roll();
        this.updateDiceDisplay();
        this.rollCount++;
    }

    toggleSelectDice(index) {
        this.dice.toggleKeep(index);
        this.updateDiceDisplay();
    }

    keepSelectedDice() {
        // This function is now just for visual feedback
        this.updateDiceDisplay();
    }

    selectScoreOption(option) {
        if (this.scoreOptions[option] !== null) {
            alert("This score option has already been used.");
            return;
        }

        const score = this.calculateScore(option);
        this.scoreOptions[option] = score;
        this.updateScoreDisplay();
        this.endTurn();
    }

    calculateScore(option) {
        return YatzyEngine.calculateScore(option, this.dice.values);
    }

    endTurn() {
        // Check if any score option has been made before ending the turn
        const hasMadeCombination = Object.values(this.scoreOptions).some(option => option !== null);
        if (!hasMadeCombination) {
            alert("Make a combination before ending the round");
            return; // Prevent ending the turn if no combination has been made
        }

        this.rollCount = 0; // Reset roll count for the next turn
        this.dice.resetKept(); // Reset kept dice
        this.updateDiceDisplay(); // Update display for next turn
    }

    resetGame() {
        this.score = 0;
        this.scoreOptions = {
            ones: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            threeOfAKind: null,
            fourOfAKind: null,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            chance: null,
            yahtzee: null
        };
        this.endTurn();
        this.updateScoreDisplay();
    }

    updateDiceDisplay() {
        const diceElements = Array.from(document.getElementsByClassName('dice'));
        diceElements.forEach((el, i) => {
            el.textContent = this.dice.values[i];
            el.classList.toggle('selected', this.dice.kept[i]);
        });
    }

    updateScoreDisplay() {
        Object.keys(this.scoreOptions).forEach(option => {
            const scoreValue = this.scoreOptions[option] !== null ? this.scoreOptions[option] : "";
            document.getElementById(option).querySelector('span').textContent = scoreValue;
        });

        const totalScore = Object.values(this.scoreOptions).reduce((acc, val) => acc + (val || 0), 0);
        document.getElementById('total-score').textContent = totalScore; // Updated to match your HTML structure
    }
}


