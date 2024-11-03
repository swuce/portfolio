class YatzyEngine {
    constructor() {
        this.usedCategories = new Set();
    }

    static calculateScore(category, diceValues) {
        const counts = Array(7).fill(0);
        diceValues.forEach(value => counts[value]++);

        let score = 0;

        switch (category) {
            case 'ones':
                score = counts[1] * 1;
                break;
            case 'twos':
                score = counts[2] * 2;
                break;
            case 'threes':
                score = counts[3] * 3;
                break;
            case 'fours':
                score = counts[4] * 4;
                break;
            case 'fives':
                score = counts[5] * 5;
                break;
            case 'sixes':
                score = counts[6] * 6;
                break;
            case 'threeOfAKind':
                for (let i = 1; i <= 6; i++) {
                    if (counts[i] >= 3) {
                        score = 3 * i; // Score is three times the value of the die
                        break;
                    }
                }
                break;
            case 'fourOfAKind':
                for (let i = 1; i <= 6; i++) {
                    if (counts[i] >= 4) {
                        score = 4 * i; // Score is four times the value of the die
                        break;
                    }
                }
                break;
            case 'fullHouse':
                const hasThree = counts.includes(3);
                const hasTwo = counts.includes(2);
                score = (hasThree && hasTwo) ? 25 : 0; // Score 25 for a full house
                break;
            case 'smallStraight':
                score = (counts[1] && counts[2] && counts[3] && counts[4]) ||
                        (counts[2] && counts[3] && counts[4] && counts[5]) ||
                        (counts[3] && counts[4] && counts[5] && counts[6]) ? 30 : 0;
                break;
            case 'largeStraight':
                score = (counts[1] && counts[2] && counts[3] && counts[4] && counts[5]) ||
                        (counts[2] && counts[3] && counts[4] && counts[5] && counts[6]) ? 40 : 0;
                break;
            case 'chance':
                score = diceValues.reduce((a, b) => a + b, 0);
                break;
            case 'yahtzee':
                const isYahtzee = counts.includes(5);
                score = isYahtzee ? 50 : 0;
                break;
            default:
                score = 0;
        }

        return score;
    }
}
