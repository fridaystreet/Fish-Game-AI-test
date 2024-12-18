# Detailed Game Specification: Fish Game

## 1. Introduction
This document provides a detailed specification for the Fish Game, a 3D web browser-based game where players control a fish exploring the Great Barrier Reef. This document expands on the previous specification, providing implementation details, library suggestions, code structure, and testing strategies.

## 2. Core Game Mechanics

### 2.1. Movement
*   **Mouse Look:**
    *   **Implementation:** Use a library like Three.js or Babylon.js to capture mouse movement and update the fish's rotation.
    *   **Code Structure:** Create a `CameraControls` class or component that handles mouse input and updates the camera's rotation.
    *   **Details:** The camera should rotate around the fish, allowing the player to look around. The fish's forward direction should always be aligned with the camera's forward direction.
*   **Forward Movement:**
    *   **Implementation:** Apply a constant forward force to the fish's 3D model.
    *   **Code Structure:** Create a `FishMovement` class or component that handles the fish's movement.
    *   **Details:** The fish should move forward at a constant speed.
*   **Speed Boost:**
    *   **Implementation:** Increase the forward force applied to the fish for a short duration when the speed boost button is pressed.
    *   **Code Structure:** Add a `speedBoost` method to the `FishMovement` class that temporarily increases the fish's speed.
    *   **Details:** The speed boost should have a cooldown period.
*   **Turning:**
    *   **Implementation:** Update the fish's rotation based on mouse movement.
    *   **Code Structure:** The `CameraControls` class should also handle the fish's turning.
    *   **Details:** The turning speed and radius should vary based on the fish species.

### 2.2. Collection
*   **Coins:**
    *   **Implementation:** Create 3D coin models and place them throughout the environment. Use collision detection to determine when the fish collects a coin.
    *   **Code Structure:** Create a `Coin` class or component that handles coin behavior.
    *   **Details:** When a coin is collected, it should be removed from the scene, and the player's XP should be increased.
*   **Treasure Chests:**
    *   **Implementation:** Create 3D treasure chest models and place them in hidden areas. Use collision detection to determine when the fish is near a chest.
    *   **Code Structure:** Create a `TreasureChest` class or component that handles chest behavior.
    *   **Details:** When the interact button is pressed near a chest, it should open, and the player's XP or coins should be increased.

### 2.3. Combat/Interaction
*   **Attack/Interact Button:**
    *   **Implementation:** Use a single button (e.g., left mouse button) for both attacking and interacting.
    *   **Code Structure:** The `FishMovement` class should handle the attack/interact button.
    *   **Details:** When near a predator, pressing the button will trigger an attack animation. When near a treasure chest, pressing the button will trigger an interaction.
*   **Attack:**
    *   **Implementation:** Trigger an attack animation and apply damage to the predator.
    *   **Code Structure:** Add an `attack` method to the `FishMovement` class.
    *   **Details:** The effectiveness of the attack will depend on the fish species and upgrades.
*   **Interact:**
    *   **Implementation:** Trigger an interaction animation and open the treasure chest.
    *   **Code Structure:** Add an `interact` method to the `FishMovement` class.
    *   **Details:** The interaction should only occur when the player is near an interactable object.

### 2.4. Experience and Progression
*   **XP:**
    *   **Implementation:** Store the player's XP in a variable.
    *   **Code Structure:** Create a `Player` class or component that handles the player's XP.
    *   **Details:** XP is gained by collecting coins and opening treasure chests.
*   **Shop:**
    *   **Implementation:** Create a separate shop screen with a list of items for purchase.
    *   **Code Structure:** Create a `Shop` class or component that handles the shop functionality.
    *   **Details:** The shop should be accessible from the main menu.
*   **Upgrades:**
    *   **Implementation:** Implement upgrades that increase attack power, health, speed, and turning agility.
    *   **Code Structure:** Add upgrade methods to the `Player` class.
    *   **Details:** Upgrades should be purchased using XP.
*   **Skins:**
    *   **Implementation:** Implement cosmetic changes to the player's fish.
    *   **Code Structure:** Add skin selection functionality to the `Player` class.
    *   **Details:** Skins should be purchased using XP.
*   **New Fish Species:**
    *   **Implementation:** Implement the ability to unlock new fish species.
    *   **Code Structure:** Add fish species selection functionality to the `Player` class.
    *   **Details:** New fish species should be purchased using XP.

### 2.5. Game Environment
*   **3D Reef:**
    *   **Implementation:** Use 3D modeling software to create the reef environment.
    *   **Code Structure:** Create a `ReefEnvironment` class or component that handles the environment.
    *   **Details:** The reef should be varied and visually appealing.
*   **Predators:**
    *   **Implementation:** Create 3D predator models and implement basic AI for patrol and chase behavior.
    *   **Code Structure:** Create a `Predator` class or component that handles predator behavior.
    *   **Details:** Predators should be specific to the fish species being played.
*   **Caves and Deep Areas:**
    *   **Implementation:** Create darker areas in the environment to add suspense.
    *   **Code Structure:** The `ReefEnvironment` class should handle the lighting in these areas.
    *   **Details:** These areas may contain hidden treasures.

## 3. Libraries and Tools
*   **3D Game Engine:** Three.js or Babylon.js
*   **Physics Engine:** Cannon.js
*   **3D Modeling Software:** Blender or Maya
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 4. Code Structure
*   **src/components:** Contains reusable components like `CameraControls`, `FishMovement`, `Coin`, `TreasureChest`, `Predator`, etc.
*   **src/scenes:** Contains scene-specific code like `ReefEnvironment`.
*   **src/ui:** Contains UI components like `XPDisplay`, `ShopButton`, `ShopScreen`, etc.
*   **src/core:** Contains core game logic like `Player`, `GameManager`, etc.
*   **src/utils:** Contains utility functions.
*   **src/main.js:** Entry point of the game.

## 5. Testing
*   **Unit Tests:** Use a testing framework like Jest to test individual components and functions.
*   **Integration Tests:** Test the interaction between different components.
*   **Manual Testing:** Play the game and test all features.
*   **Performance Testing:** Test the game's performance on different browsers and devices.

## 6. Deployment
*   **Optimization:** Optimize the game for web browsers.
*   **Deployment:** Deploy the game to a web server.

## 7. Document Navigation
This document provides a high-level overview of the game's specifications. For more detailed information on specific aspects of the game, please refer to the following documents:

*   **`docs/movement-spec.md`:** Detailed specifications for the fish's movement mechanics, including mouse look, forward movement, speed boost, and turning.
*   **`docs/collection-spec.md`:** Detailed specifications for the collection mechanics, including coins and treasure chests.
*   **`docs/combat-interaction-spec.md`:** Detailed specifications for the combat and interaction mechanics, including attacking predators and interacting with objects.
*   **`docs/experience-progression-spec.md`:** Detailed specifications for the experience and progression mechanics, including XP, shop, upgrades, skins, and new fish species.
*   **`docs/environment-spec.md`:** Detailed specifications for the game environment, including the 3D reef, predators, caves, and deep areas.

Each of these documents provides implementation details, library suggestions, code structure, and testing strategies for their respective areas.

## 8. Detail Assessment
The specifications provided in this document and the linked documents are intended to be comprehensive and detailed enough for an AI to understand and implement the game. However, if any further clarification or detail is needed, please do not hesitate to ask.