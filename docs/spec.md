# Game Specification: Fish Game

## 1. Game Overview
Fish Game is a 3D web browser-based game where players control a fish exploring the Great Barrier Reef. The game focuses on exploration, collection, and light combat mechanics. Players collect coins and treasure chests to gain XP, which can be used in a shop to purchase upgrades, skins, and new fish species.

## 2. Gameplay Mechanics

### 2.1. Movement
*   **Mouse Look:** The player controls the fish's direction using mouse movements, similar to a first-person shooter.
*   **Forward Movement:** The fish constantly moves forward.
*   **Speed Boost:** A button (e.g., right mouse button or spacebar) allows the fish to swim faster for a short duration.
*   **Turning:** The fish turns based on mouse movement. The turning speed and radius will vary based on the fish species.

### 2.2. Collection
*   **Coins:** Coins are collected by swimming through them. Each coin grants a small amount of XP.
*   **Treasure Chests:** Treasure chests are opened by pressing the interact button (same as the attack button) when in close proximity. Treasure chests contain a larger amount of XP or coins.

### 2.3. Combat/Interaction
*   **Attack/Interact Button:** A single button (e.g., left mouse button) is used for both attacking and interacting.
*   **Attack:** When near a predator, pressing the button will trigger an attack animation. The effectiveness of the attack will depend on the fish species and upgrades.
*   **Interact:** When near a treasure chest or other interactable object, pressing the button will trigger an interaction.

### 2.4. Experience and Progression
*   **XP:** Experience points are gained by collecting coins and opening treasure chests.
*   **Shop:** Players can access a shop screen outside of the main gameplay to spend XP on upgrades, skins, and new fish species.
*   **Upgrades:** Upgrades can include increased attack power, health, speed, and turning agility.
*   **Skins:** Cosmetic changes to the player's fish.
*   **New Fish Species:** Unlocking new fish species allows players to experience different gameplay mechanics and challenges.

### 2.5. Game Environment
*   **3D Reef:** The game environment is a 3D representation of the Great Barrier Reef, with varied terrain, coral, and lighting.
*   **Predators:** Predators are specific to the fish species being played. They will patrol the environment and chase the player if they get too close.
*   **Caves and Deep Areas:** These areas will be darker and may contain hidden treasures.

## 3. Controls
*   **Mouse Movement:** Controls the direction of the fish.
*   **Left Mouse Button:** Attack/Interact.
*   **Right Mouse Button/Spacebar:** Speed Boost.

## 4. Implementation Details
*   **Engine:** Use a 3D game engine suitable for web browsers (e.g., Three.js, Babylon.js).
*   **Physics:** Implement basic physics for movement and collision detection.
*   **AI:** Implement basic AI for predators to patrol and chase the player.
*   **UI:** Create a simple UI for displaying XP, health, and shop access.
*   **Sound:** Add sound effects for movement, collection, combat, and environment.

## 5. Points and XP System
*   **Coin Value:** Each coin has a base XP value.
*   **Treasure Chest Value:** Treasure chests have a higher XP value than coins.
*   **Bonus Multipliers:** Implement bonus multipliers for consecutive coin collections or other achievements.
*   **XP Scaling:** XP requirements for upgrades and new fish species will scale to maintain engagement.

## 6. Shop System
*   **Shop Screen:** A separate screen accessible from the main menu.
*   **Items:** The shop will offer upgrades, skins, and new fish species.
*   **Currency:** XP is used as the currency in the shop.
*   **Purchase Confirmation:** A confirmation dialog will be displayed before each purchase.