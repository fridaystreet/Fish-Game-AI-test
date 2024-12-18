# Detailed Experience and Progression Specification: Fish Game

## 1. Introduction
This document provides a detailed specification for the experience and progression mechanics in Fish Game. It outlines the implementation details, library choices, code structure, and testing strategies for how players gain experience, use the shop, and unlock upgrades, skins, and new fish species.

## 2. Core Experience and Progression Mechanics

### 2.1. XP (Experience Points)
*   **Description:** Experience points are gained by collecting coins and opening treasure chests.
*   **Implementation:**
    *   **XP Storage:** The player's XP will be stored in a variable within the `Player` class.
    *   **XP Gain:** When a coin is collected or a treasure chest is opened, the player's XP will be increased by the corresponding value.
    *   **XP Display:** The player's current XP will be displayed in the UI.
*   **Code Structure:**
    *   **`Player.js`:** This class will handle the player's XP.
        *   **`constructor(initialXP)`:** Initializes the player with the initial XP.
        *   **`addXP(amount)`:** Adds XP to the player's total.
        *   **`getXP()`:** Returns the player's current XP.
        *   **`setXP(amount)`:** Sets the player's current XP.
    *   **`XPDisplay.js`:** This class will handle the display of the player's XP.
        *   **`constructor(player)`:** Initializes the XP display with the player object.
        *   **`update()`:** Updates the XP display with the player's current XP.
*   **Details:**
    *   The player's XP should be persistent across game sessions.
    *   The XP gain from coins and treasure chests should be adjustable.
    *   The XP display should be clear and easy to read.

### 2.2. Shop
*   **Description:** Players can access a shop screen outside of the main gameplay to spend XP on upgrades, skins, and new fish species.
*   **Implementation:**
    *   **Shop Screen:** A separate screen will be created for the shop.
    *   **Item Display:** The shop will display a list of available items, including upgrades, skins, and new fish species.
    *   **Purchase Handling:** When an item is purchased, the player's XP will be deducted, and the item will be added to the player's inventory.
    *   **Confirmation:** A confirmation dialog will be displayed before each purchase.
*   **Code Structure:**
    *   **`Shop.js`:** This class will handle the shop functionality.
        *   **`constructor(player)`:** Initializes the shop with the player object.
        *   **`displayItems()`:** Displays the available items in the shop.
        *   **`purchaseItem(item)`:** Handles the purchase of an item.
        *   **`showConfirmationDialog(item)`:** Displays a confirmation dialog before purchase.
    *   **`ShopScreen.js`:** This class will handle the display of the shop screen.
        *   **`constructor(shop)`:** Initializes the shop screen with the shop object.
        *   **`render()`:** Renders the shop screen.
*   **Details:**
    *   The shop should be accessible from the main menu.
    *   The shop should display a list of available items.
    *   The purchase process should be clear and easy to understand.
    *   A confirmation dialog should be displayed before each purchase.

### 2.3. Upgrades
*   **Description:** Upgrades can include increased attack power, health, speed, and turning agility.
*   **Implementation:**
    *   **Upgrade Storage:** The player's upgrades will be stored in a variable within the `Player` class.
    *   **Upgrade Application:** When an upgrade is purchased, the corresponding attribute of the player will be increased.
    *   **Upgrade Effects:** The upgrades will affect the player's performance in the game.
*   **Code Structure:**
    *   **`Player.js`:** This class will handle the player's upgrades.
        *   **`addUpgrade(upgrade)`:** Adds an upgrade to the player's inventory.
        *   **`applyUpgrades()`:** Applies the upgrades to the player's attributes.
        *   **`getUpgrades()`:** Returns the player's current upgrades.
    *   **`Upgrade.js`:** This class will handle the upgrade data.
        *   **`constructor(name, description, cost, attribute, value)`:** Initializes the upgrade with its name, description, cost, attribute, and value.
*   **Details:**
    *   Upgrades should be purchased using XP.
    *   Upgrades should have a noticeable effect on the player's performance.
    *   The cost of upgrades should be balanced to maintain engagement.

### 2.4. Skins
*   **Description:** Cosmetic changes to the player's fish.
*   **Implementation:**
    *   **Skin Storage:** The player's skins will be stored in a variable within the `Player` class.
    *   **Skin Application:** When a skin is purchased, the fish's appearance will be updated.
    *   **Skin Selection:** The player will be able to select a skin from their inventory.
*   **Code Structure:**
    *   **`Player.js`:** This class will handle the player's skins.
        *   **`addSkin(skin)`:** Adds a skin to the player's inventory.
        *   **`applySkin(skin)`:** Applies the skin to the fish model.
        *   **`getSkins()`:** Returns the player's current skins.
    *   **`Skin.js`:** This class will handle the skin data.
        *   **`constructor(name, description, cost, texture)`:** Initializes the skin with its name, description, cost, and texture.
*   **Details:**
    *   Skins should be purchased using XP.
    *   Skins should be visually appealing.
    *   The player should be able to select a skin from their inventory.

### 2.5. New Fish Species
*   **Description:** Unlocking new fish species allows players to experience different gameplay mechanics and challenges.
*   **Implementation:**
    *   **Fish Species Storage:** The player's unlocked fish species will be stored in a variable within the `Player` class.
    *   **Fish Species Selection:** The player will be able to select a fish species from their inventory.
    *   **Gameplay Changes:** Each fish species will have unique attributes and challenges.
*   **Code Structure:**
    *   **`Player.js`:** This class will handle the player's fish species.
        *   **`addFishSpecies(fishSpecies)`:** Adds a fish species to the player's inventory.
        *   **`selectFishSpecies(fishSpecies)`:** Selects a fish species for the player.
        *   **`getFishSpecies()`:** Returns the player's current fish species.
    *   **`FishSpecies.js`:** This class will handle the fish species data.
        *   **`constructor(name, description, cost, attributes)`:** Initializes the fish species with its name, description, cost, and attributes.
*   **Details:**
    *   New fish species should be purchased using XP.
    *   Each fish species should have unique attributes and challenges.
    *   The player should be able to select a fish species from their inventory.

## 3. Libraries and Tools
*   **3D Game Engine:** Three.js
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 4. Testing
*   **Unit Tests:** Use Jest to test the `Player`, `Shop`, `Upgrade`, `Skin`, and `FishSpecies` classes.
*   **Integration Tests:** Test the interaction between the player, shop, upgrades, skins, and fish species.
*   **Manual Testing:** Play the game and test the experience and progression mechanics.

## 5. Code Example (Conceptual)
```javascript
// Player.js
class Player {
  constructor(initialXP) {
    this.xp = initialXP;
    this.upgrades = [];
    this.skins = [];
    this.fishSpecies = [];
  }

  addXP(amount) {
    this.xp += amount;
  }

  getXP() {
    return this.xp;
  }

  addUpgrade(upgrade) {
    this.upgrades.push(upgrade);
  }

  applyUpgrades() {
    // Apply upgrades to player attributes
  }

  addSkin(skin) {
    this.skins.push(skin);
  }

  applySkin(skin) {
    // Apply skin to fish model
  }

  addFishSpecies(fishSpecies) {
    this.fishSpecies.push(fishSpecies);
  }

  selectFishSpecies(fishSpecies) {
    // Select fish species for player
  }
}

// Shop.js
class Shop {
  constructor(player) {
    this.player = player;
  }

  displayItems() {
    // Display available items in the shop
  }

  purchaseItem(item) {
    // Handle purchase of an item
  }
}