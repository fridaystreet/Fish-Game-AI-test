# Detailed Movement Specification: Fish Game

## 1. Introduction
This document provides a detailed specification for the movement mechanics in Fish Game. It outlines the implementation details, library choices, code structure, and testing strategies for the fish's movement.

## 2. Core Movement Mechanics

### 2.1. Mouse Look
*   **Description:** The player controls the fish's direction using mouse movements, similar to a first-person shooter.
*   **Implementation:**
    *   **Library:** Three.js will be used for 3D rendering and handling mouse input.
    *   **Camera Setup:** A perspective camera will be attached to the fish model, slightly behind and above it.
    *   **Mouse Input:** Event listeners will be added to the canvas to capture mouse movement.
    *   **Rotation:** The camera's rotation will be updated based on the mouse's horizontal and vertical movement.
    *   **Fish Alignment:** The fish's forward direction will always be aligned with the camera's forward direction.
*   **Code Structure:**
    *   **`CameraControls.js`:** This class will handle mouse input and update the camera's rotation.
        *   **`constructor(camera, domElement)`:** Initializes the camera controls with the camera and the DOM element to listen for mouse events.
        *   **`update()`:** Updates the camera's rotation based on mouse movement.
        *   **`onMouseMove(event)`:** Handles mouse movement events and updates the camera's rotation.
        *   **`getDirection()`:** Returns the current forward direction of the camera.
*   **Details:**
    *   The camera should rotate around the fish, allowing the player to look around.
    *   The fish's forward direction should always be aligned with the camera's forward direction.
    *   The mouse sensitivity should be adjustable in the game settings.
    *   The vertical rotation should be limited to prevent the camera from flipping upside down.

### 2.2. Forward Movement
*   **Description:** The fish constantly moves forward in the direction it is facing.
*   **Implementation:**
    *   **Force Application:** A constant forward force will be applied to the fish's 3D model.
    *   **Velocity:** The fish's velocity will be updated based on the applied force.
    *   **Drag:** A drag force will be applied to simulate water resistance.
*   **Code Structure:**
    *   **`FishMovement.js`:** This class will handle the fish's movement.
        *   **`constructor(fishModel, speed)`:** Initializes the fish movement with the fish model and the base speed.
        *   **`update(deltaTime)`:** Updates the fish's position based on the applied force and drag.
        *   **`applyForce(force)`:** Applies a force to the fish.
        *   **`applyDrag(dragCoefficient)`:** Applies a drag force to the fish.
*   **Details:**
    *   The fish should move forward at a constant speed.
    *   The speed should be adjustable based on the fish species and upgrades.
    *   The drag force should simulate water resistance.

### 2.3. Speed Boost
*   **Description:** The player can temporarily increase the fish's speed by pressing a button.
*   **Implementation:**
    *   **Button Input:** The spacebar will be used as the speed boost button.
    *   **Force Increase:** The forward force applied to the fish will be increased for a short duration when the speed boost button is pressed.
    *   **Cooldown:** A cooldown period will be implemented to prevent the player from constantly using the speed boost.
*   **Code Structure:**
    *   **`FishMovement.js`:** This class will handle the speed boost.
        *   **`speedBoost()`:** Increases the fish's speed for a short duration.
        *   **`startCooldown()`:** Starts the cooldown period.
        *   **`isCooldown()`:** Checks if the cooldown period is active.
*   **Details:**
    *   The speed boost should have a limited duration.
    *   The cooldown period should be adjustable based on the fish species and upgrades.
    *   A visual effect should be added to indicate when the speed boost is active.

### 2.4. Turning
*   **Description:** The fish turns based on mouse movement.
*   **Implementation:**
    *   **Rotation Update:** The fish's rotation will be updated based on the mouse's horizontal movement.
    *   **Turning Speed:** The turning speed will be adjustable based on the fish species and upgrades.
    *   **Turning Radius:** The turning radius will be adjustable based on the fish species and upgrades.
*   **Code Structure:**
    *   **`CameraControls.js`:** This class will also handle the fish's turning.
        *   **`update()`:** Updates the fish's rotation based on mouse movement.
        *   **`setTurningSpeed(speed)`:** Sets the turning speed.
        *   **`setTurningRadius(radius)`:** Sets the turning radius.
*   **Details:**
    *   The turning speed and radius should vary based on the fish species.
    *   The turning should be smooth and responsive.
    *   The turning radius should affect how tightly the fish can turn.

## 3. Libraries and Tools
*   **3D Game Engine:** Three.js
*   **Physics Engine:** Cannon.js
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 4. Testing
*   **Unit Tests:** Use Jest to test the `CameraControls` and `FishMovement` classes.
*   **Integration Tests:** Test the interaction between the camera controls and the fish movement.
*   **Manual Testing:** Play the game and test the movement mechanics.

## 5. Code Example (Conceptual)
```javascript
// CameraControls.js
class CameraControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.mouse = new THREE.Vector2();
    this.sensitivity = 0.002;
    this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  update() {
    // Update camera rotation based on mouse movement
  }

  onMouseMove(event) {
    // Handle mouse movement
  }

  getDirection() {
    // Return camera forward direction
  }
}

// FishMovement.js
class FishMovement {
  constructor(fishModel, speed) {
    this.fishModel = fishModel;
    this.speed = speed;
    this.velocity = new THREE.Vector3();
  }

  update(deltaTime) {
    // Update fish position based on force and drag
  }

  applyForce(force) {
    // Apply force to the fish
  }

  applyDrag(dragCoefficient) {
    // Apply drag force to the fish
  }

  speedBoost() {
    // Increase fish speed
  }
}