# Fish Game

## Project Overview
Fish Game is a 3D web browser-based game where players control a fish exploring the Great Barrier Reef. The game focuses on exploration, collection, and light combat mechanics. Players collect coins and treasure chests to gain XP, which can be used in a shop to purchase upgrades, skins, and new fish species.

## Architecture
The game is built using a component-based architecture, with separate components for different aspects of the game, such as:

*   **`src/components`:** Contains reusable components like `CameraControls`, `FishMovement`, `Coin`, `TreasureChest`, `Predator`, etc.
*   **`src/scenes`:** Contains scene-specific code like `ReefEnvironment`.
*   **`src/ui`:** Contains UI components like `XPDisplay`, `ShopButton`, `ShopScreen`, etc.
*   **`src/core`:** Contains core game logic like `Player`, `GameManager`, etc.
*   **`src/utils`:** Contains utility functions.
*   **`src/main.js`:** Entry point of the game.

The game uses the Three.js library for 3D rendering and the Cannon.js or Ammo.js library for physics (optional).

## Development Environment
*   **3D Game Engine:** Three.js
*   **Physics Engine:** Cannon.js
*   **3D Modeling Software:** Blender or Maya
*   **Text Editor:** VSCode
*   **Version Control:** Git
*   **Development Server:** A local development server (e.g., using `python -m http.server`). To start the server, navigate to the project directory in your terminal and run `python -m http.server`. For hot-reloading, you can use `live-server`. To install it, run `npm install live-server`. Then, to start the server, run `npx live-server`.
*   **Frontend Framework:** This project does not use a frontend framework for the basic app.
*   **Unit Testing:** This project uses a component-based approach to make unit testing easier. You can use Jest to write unit tests. To install it, run `npm install --save-dev jest`. To run the tests, create a `package.json` file with a test script (e.g., `{"scripts": {"test": "jest"}}`) and then run `npm test`.
*   **Sub-Task Checkpoints:** To ensure we can easily pick up where we left off, we will use a sub-task checkpoint system. Each sub-task will be clearly defined in the `docs/plan.md` file, and we will update the plan as we progress.

## Getting Started
1.  Clone the repository.
2.  Install the dependencies (if any).
3.  Start the development server.
4.  Open the game in your web browser.

## Code Structure
The code is organized into the following directories:

*   **`src/`:** Contains all the source code for the game.
    *   **`components/`:** Contains reusable components.
    *   **`scenes/`:** Contains scene-specific code.
    *   **`ui/`:** Contains UI components.
    *   **`core/`:** Contains core game logic.
    *   **`utils/`:** Contains utility functions.
    *   **`main.js`:** Entry point of the game.
*   **`docs/`:** Contains the documentation for the game.
*   **`assets/`:** Contains the assets for the game, such as 3D models, textures, and audio files.

## Testing
*   **Unit Tests:** Use a testing framework like Jest to test individual components and functions.
*   **Integration Tests:** Test the interaction between different components.
*   **Manual Testing:** Play the game and test all features.
*   **Performance Testing:** Test the game's performance on different browsers and devices.

## Deployment
*   Optimize the game for web browsers.
*   Deploy the game to a web server.

## Further Documentation
For more detailed information on specific aspects of the game, please refer to the documents in the `docs/` directory.


## Instructions for the AI to get started
Read the docs in the following order
 - docs/spec.md
 - docs/visuals.md
 - docs/detailed-spec.md 
 - docs/detailed-visuals.md
 - all the other docs referenced in those 

The plan.md has a detailed plan on where we are at. 
- check git for uncommited changes and the last commit to see what's been done if you need to. 
- analyse any code you think you need for the task
- Run the tests to see what's failing at the moment. 

When you pick up where we left off and carry on, remeber VERY IMPORTANT: 
- keep implementing all the tasks in the plan in order until you get stuck more than 5 times on the same issue
- don't use attempt_completion to report your finishing of a task as it will stop your flow. Just tell me in a normal message and then keep going
- completely implement the plan base don the rules above
- Ensure you're doing git commits once you finsih each task before starting the next
- Make sure all the tests are passing before moving on to the next task