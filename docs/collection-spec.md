# Detailed Collection Specification: Fish Game

## 1. Introduction
This document provides a detailed specification for the collection mechanics in Fish Game. It outlines the implementation details, library choices, code structure, and testing strategies for collecting coins and treasure chests.

## 2. Core Collection Mechanics

### 2.1. Coins
*   **Description:** Coins are scattered throughout the environment and are collected by swimming through them.
*   **Implementation:**
    *   **3D Model:** A simple sphere model will be used for the coins.
    *   **Material:** The coins will have a yellow material with a slight glow effect.
    *   **Placement:** Coins will be placed throughout the environment, with varying densities in different areas.
    *   **Collision Detection:** Three.js will be used for collision detection. When the fish collides with a coin, the coin will be collected.
    *   **XP Award:** Each coin will grant a small amount of XP to the player.
*   **Code Structure:**
    *   **`Coin.js`:** This class will handle coin behavior.
        *   **`constructor(position, value)`:** Initializes the coin with its position and XP value.
        *   **`update()`:** Updates the coin's state (e.g., animation).
        *   **`onCollision(player)`:** Handles the collision with the player, awarding XP and removing the coin.
*   **Details:**
    *   Coins should be easily visible in the environment.
    *   The XP value of each coin should be adjustable.
    *   A visual effect should be added when a coin is collected.
    *   A sound effect should be played when a coin is collected.

### 2.2. Treasure Chests
*   **Description:** Treasure chests are hidden in the environment and are opened by pressing the interact button when in close proximity.
*   **Implementation:**
    *   **3D Model:** A detailed 3D model of a wooden chest with metal bands will be used.
    *   **Material:** The chest will have a purple glow effect.
    *   **Placement:** Treasure chests will be placed in hidden areas, such as caves and deep parts of the reef.
    *   **Proximity Check:** Three.js will be used for proximity checks. When the fish is within a certain radius of a chest, the interact button will be enabled.
    *   **Interaction:** When the interact button is pressed, the chest will open, and the player will receive a reward.
    *   **Reward:** Treasure chests will contain a larger amount of XP or coins.
*   **Code Structure:**
    *   **`TreasureChest.js`:** This class will handle treasure chest behavior.
        *   **`constructor(position, reward)`:** Initializes the treasure chest with its position and reward.
        *   **`update()`:** Updates the chest's state (e.g., animation).
        *   **`onProximity(player)`:** Checks if the player is within proximity and enables the interact button.
        *   **`onInteract(player)`:** Handles the interaction with the player, awarding the reward and opening the chest.
*   **Details:**
    *   Treasure chests should be hidden in interesting locations.
    *   The reward of each chest should be adjustable.
    *   A visual effect should be added when a chest is opened.
    *   A sound effect should be played when a chest is opened.
    *   The interact button should only be enabled when the player is within proximity of a chest.

## 3. Libraries and Tools
*   **3D Game Engine:** Three.js
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 4. Testing
*   **Unit Tests:** Use Jest to test the `Coin` and `TreasureChest` classes.
*   **Integration Tests:** Test the interaction between the player and the coins and treasure chests.
*   **Manual Testing:** Play the game and test the collection mechanics.

## 5. Code Example (Conceptual)
```javascript
// Coin.js
class Coin {
  constructor(position, value) {
    this.position = position;
    this.value = value;
    this.model = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    this.model.position.copy(position);
  }

  update() {
    // Update coin animation
  }

  onCollision(player) {
    // Handle collision with player
  }
}

// TreasureChest.js
class TreasureChest {
  constructor(position, reward) {
    this.position = position;
    this.reward = reward;
    this.model = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x800080 }));
    this.model.position.copy(position);
    this.isOpened = false;
  }

  update() {
    // Update chest animation
  }

  onProximity(player) {
    // Check if player is within proximity
  }

  onInteract(player) {
    // Handle interaction with player
  }
}