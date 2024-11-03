class Dice {
    constructor(numberOfDice = 5) {
        this.numberOfDice = numberOfDice;
        this.values = Array(numberOfDice).fill(0);
        this.kept = Array(numberOfDice).fill(false);
    }

    roll() {
        this.values = this.values.map((val, i) => this.kept[i] ? val : Math.floor(Math.random() * 6) + 1);
        return this.values;
    }

    toggleKeep(index) {
        this.kept[index] = !this.kept[index];
    }

    resetKept() {
        this.kept.fill(false);
    }

    getKeptValues() {
        return this.values.filter((_, i) => this.kept[i]);
    }
}

