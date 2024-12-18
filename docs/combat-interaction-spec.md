# Detailed Combat/Interaction Specification: Fish Game

## 1. Introduction
This document provides a detailed specification for the combat and interaction mechanics in Fish Game. It outlines the implementation details, library choices, code structure, and testing strategies for attacking predators and interacting with objects.

## 2. Core Combat/Interaction Mechanics

### 2.1. Attack/Interact Button
*   **Description:** A single button (e.g., left mouse button) is used for both attacking and interacting.
*   **Implementation:**
    *   **Input Handling:** Event listeners will be added to the canvas to capture left mouse button clicks.
    *   **Context Awareness:** The game will determine whether the player is near a predator or an interactable object.
    *   **Action Trigger:** Based on the context, the appropriate action (attack or interact) will be triggered.
*   **Code Structure:**
    *   **`InputManager.js`:** This class will handle input events.
        *   **`constructor(domElement)`:** Initializes the input manager with the DOM element to listen for input events.
        *   **`onMouseClick(event)`:** Handles mouse click events and determines the appropriate action.
        *   **`isNearPredator(player)`:** Checks if the player is near a predator.
        *   **`isNearInteractable(player)`:** Checks if the player is near an interactable object.
*   **Details:**
    *   The left mouse button will be used for both attacking and interacting.
    *   The game should be able to determine the context of the button press.
    *   A visual cue should be added to indicate when the player can interact with an object.

### 2.2. Attack
*   **Description:** When near a predator, pressing the button will trigger an attack animation and apply damage to the predator.
*   **Implementation:**
    *   **Proximity Check:** Three.js will be used for proximity checks. When the fish is within a certain radius of a predator, the attack button will be enabled.
    *   **Animation:** An attack animation will be played on the fish model.
    *   **Damage Application:** Damage will be applied to the predator based on the fish's attack power.
    *   **Predator Reaction:** The predator will react to the attack (e.g., play a hit animation, lose health).
*   **Code Structure:**
    *   **`FishCombat.js`:** This class will handle the fish's combat mechanics.
        *   **`constructor(fishModel, attackPower)`:** Initializes the fish combat with the fish model and attack power.
        *   **`attack(predator)`:** Triggers the attack animation and applies damage to the predator.
        *   **`onProximity(predator)`:** Checks if the player is within proximity of a predator and enables the attack button.
    *   **`Predator.js`:** This class will handle predator behavior.
        *   **`takeDamage(damage)`:** Applies damage to the predator.
        *   **`playHitAnimation()`:** Plays a hit animation.
*   **Details:**
    *   The attack animation should be visually appealing.
    *   The damage applied to the predator should be based on the fish's attack power.
    *   The predator should react to the attack.
    *   The attack button should only be enabled when the player is within proximity of a predator.

### 2.3. Interact
*   **Description:** When near a treasure chest or other interactable object, pressing the button will trigger an interaction.
*   **Implementation:**
    *   **Proximity Check:** Three.js will be used for proximity checks. When the fish is within a certain radius of an interactable object, the interact button will be enabled.
    *   **Interaction Trigger:** When the interact button is pressed, the interaction will be triggered.
    *   **Object Reaction:** The interactable object will react to the interaction (e.g., open a treasure chest, activate a switch).
*   **Code Structure:**
    *   **`FishInteraction.js`:** This class will handle the fish's interaction mechanics.
        *   **`constructor(fishModel)`:** Initializes the fish interaction with the fish model.
        *   **`interact(interactable)`:** Triggers the interaction with the interactable object.
        *   **`onProximity(interactable)`:** Checks if the player is within proximity of an interactable object and enables the interact button.
    *   **`Interactable.js`:** This class will handle interactable object behavior.
        *   **`onInteract(player)`:** Handles the interaction with the player.
*   **Details:**
    *   The interaction should be visually appealing.
    *   The interactable object should react to the interaction.
    *   The interact button should only be enabled when the player is within proximity of an interactable object.

## 3. Libraries and Tools
*   **3D Game Engine:** Three.js
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 4. Testing
*   **Unit Tests:** Use Jest to test the `InputManager`, `FishCombat`, and `FishInteraction` classes.
*   **Integration Tests:** Test the interaction between the player, predators, and interactable objects.
*   **Manual Testing:** Play the game and test the combat and interaction mechanics.

## 5. Code Example (Conceptual)
```javascript
// InputManager.js
class InputManager {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', this.onMouseClick.bind(this));
  }

  onMouseClick(event) {
    // Handle mouse click event
  }

  isNearPredator(player) {
    // Check if player is near a predator
  }

  isNearInteractable(player) {
    // Check if player is near an interactable object
  }
}

// FishCombat.js
class FishCombat {
  constructor(fishModel, attackPower) {
    this.fishModel = fishModel;
    this.attackPower = attackPower;
  }

  attack(predator) {
    // Trigger attack animation and apply damage
  }

  onProximity(predator) {
    // Check if player is within proximity of a predator
  }
}

// FishInteraction.js
class FishInteraction {
  constructor(fishModel) {
    this.fishModel = fishModel;
  }

  interact(interactable) {
    // Trigger interaction with interactable object
  }

  onProximity(interactable) {
    // Check if player is within proximity of an interactable object
  }
}