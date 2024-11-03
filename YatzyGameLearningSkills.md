# Yatzy Game Project

## Overview
This project is a digital version of the classic Yatzy game, implemented as part of Assignments #1 and #2. The game allows players to roll dice up to three times per turn, keep specific dice between rolls, and attempt to score in various categories based on standard Yahtzee rules. This project demonstrates core concepts in JavaScript, HTML, and CSS, with a focus on DOM manipulation, event handling, and state management.

## Game Summary
- **Objective**: The goal of the game is to score as high as possible across 13 scoring categories.
- **Gameplay**:
  1. Press the **Roll Dice** button to roll all five dice. You can roll up to three times per turn.
  2. Click on any dice to **keep** it. Kept dice won’t be rolled in subsequent rolls, allowing you to build towards a specific combination.
  3. After rolling, select a scoring category from the scorecard that matches your current dice configuration (e.g., "Three of a Kind," "Full House").
  4. Click **End Turn** to lock in your selection and conclude your turn.
  5. Play continues until all categories have been filled, at which point the game ends and the final score is displayed.

## Technical Documentation

### Key Technologies and Techniques
- **HTML**: Structured the interface, including the dice area, buttons for rolling and keeping dice, and the scorecard layout.
- **CSS**: Styled the game board, buttons, and scorecard to create a clear and user-friendly interface. Highlighted "kept" dice visually for ease of gameplay.
- **JavaScript**:
  - **Object-Oriented Design**: The game utilizes classes (e.g., `Dice`, `YatzyGame`, `YatzyEngine`) to handle the game's data and functionality, improving code organization and reusability.
  - **DOM Manipulation**: Dynamically updates the dice values, scorecard, and turn management through JavaScript.
  - **Event Handling**: Listens for clicks on dice to "keep" them, rolls to update dice values, and scoring category selections, providing an interactive user experience.
  - **State Management**: Manages game state across multiple rounds and turns, ensuring that each score category is selected only once per game.

### Core Functionalities
1. **Dice Rolling Logic**:
   - Dice values are randomized, and kept dice remain constant across rolls.
   - A maximum of three rolls per turn is enforced, after which a warning is displayed.
   
2. **Scoring System**:
   - Each scoring category checks the dice values to calculate and record the appropriate score.
   - If the selected category does not match the dice combination, it scores a 0.

3. **Turn and Round Management**:
   - Players cannot end their turn without selecting a scoring category.
   - The game ends automatically after all 13 categories are filled, with a final score alert.

### Project Files
- **HTML (index.html)**: Sets up the game layout and interface elements.
- **CSS (style.css)**: Provides the visual styling for the game elements.
- **JavaScript (YatzyEngine.js, YatzyGame.js, Dice.js)**: Implements the game logic, including dice rolling, score calculation, and game state management.

## Integration of Other Learned Technologies and Best Practices
Throughout this project and the course, various best practices and technologies were applied to enhance the game's functionality and maintainability:

- **Modular Code Design**: Breaking down the game logic into multiple files (e.g., `Dice.js`, `YatzyEngine.js`, and `YatzyGame.js`) allowed for a separation of concerns and improved readability.
- **Responsive Design**: Basic CSS techniques, including flexible grid layouts, were used to make the game interface responsive and accessible on different screen sizes.
- **Code Documentation**: Each JavaScript class and function includes comments explaining its purpose and parameters, helping future developers understand the codebase.
- **Error Handling**: Basic error handling was implemented to alert players if they attempt invalid actions, such as selecting a category twice or rolling more than three times.
- **Course Concepts**: This project showcases JavaScript fundamentals, event handling, object-oriented programming, and DOM manipulation, providing a solid foundation for more complex web applications.






Below are some ideas for future enhancements to improve gameplay, user experience, and game functionality:

1. **Multiplayer Mode**: 
   - Introduce support for multiple players, allowing users to compete against each other.
   - Implement a shared scoreboard and an alternating turn system to make the game more engaging.

2. **Enhanced UI/UX**:
   - **Dice Roll Animations**: Add animations for dice rolls to create a more visually appealing and immersive experience.
   - **Dynamic Category Highlighting**: Automatically highlight scoring categories based on the current dice values, guiding players towards potential scoring options.

3. **Score History**:
   - Provide a feature to view a history of past games and scores, enabling players to track progress or challenge previous high scores.

4. **AI Opponent**:
   - Develop an AI opponent for single-player mode, adding a competitive element to the game.
   - Program the AI to make strategic moves, simulating a realistic opponent for solo play.

5. **Local Storage Integration**:
   - Save game progress, scores, and player data to the browser's local storage, allowing players to continue from where they left off after a refresh or revisit.
   - Store previous games’ data for tracking and reviewing past performance.

These improvements aim to enhance the playability, replayability, and overall user experience of the Yatzy game, making it more engaging for both single-player and multiplayer modes.

