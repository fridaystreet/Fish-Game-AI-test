# Detailed Visual Design Document: Fish Game

## 1. Introduction
This document provides a detailed visual design for the Fish Game, a 3D web browser-based game set in the Great Barrier Reef. This document summarizes the detailed specifications from the following documents:

*   `docs/overall-style-spec.md`
*   `docs/color-palette-spec.md`
*   `docs/environment-visual-spec.md`
*   `docs/fish-design-spec.md`
*   `docs/ui-elements-spec.md`
*   `docs/special-items-spec.md`
*   `docs/lighting-effects-spec.md`
*   `docs/font-spec.md`
*   `docs/sound-design-spec.md`

## 2. Overall Style
The game will have a vibrant and realistic 3D style, aiming to capture the beauty and diversity of the Great Barrier Reef. The underwater environment will be colorful and well-lit, with darker areas in caves and deep parts to add suspense. Dynamic lighting will simulate the movement of the sun and the refraction of light through water, with caustics creating realistic light patterns on the seabed. Visual effects such as water distortion, particle effects, and motion blur will enhance the underwater feel and create a more immersive experience.

## 3. Color Palette
The primary colors will be used for the main elements of the game:
*   **Deep Blue:** `#003366` for the water and background.
*   **Bright Coral:** `#FF7F50` for coral reefs.
*   **Yellow:** `#FFFF00` for coins and light sources.
*   **Green:** `#008000` for seaweed and plant life.

The secondary colors will be used for the fish, treasure chests, and other special items:
*   **Orange:** `#FFA500` for fish and other creatures.
*   **Purple:** `#800080` for treasure chests and special items.
*   **White:** `#FFFFFF` for highlights and light reflections.

Darker colors will be used for caves and deep areas:
*   **Dark Gray/Black:** `#333333` for caves and deep areas.

## 4. Environment
The reef will be composed of various coral formations, rocks, and caves, creating a diverse and interesting environment. The lighting will simulate underwater conditions, with light rays filtering through the water and creating caustics on the seabed. The water will have a slight distortion effect to simulate the refractive properties of water. The background will feature a gradient of blue, fading into darker shades at the bottom.

## 5. Fish Design
Different fish species will have unique shapes, colors, and fin designs, reflecting the diversity of the Great Barrier Reef. Fish will have smooth swimming animations, with variations for speed boost and attack. Skins will be cosmetic changes to the fish's appearance, such as different colors or patterns.

## 6. UI Elements
*   **XP Display:** A simple text display in the top-left corner of the screen will show the player's current XP, using a clear and readable sans-serif font in white with a slight shadow.
*   **Shop Button:** A button in the top-right corner of the screen will allow the player to access the shop, using a shopping cart icon and a bright color such as yellow or orange.
*   **Shop Screen:** A separate screen will display a list of items for purchase, including upgrades, skins, and new fish species, with a clear and organized layout.
*   **Confirmation Dialog:** A dialog box will appear before each purchase, to confirm the player's decision, with a simple and clear layout and a message stating the item being purchased and its cost.

## 7. Special Items
*   **Coins:** Small, yellow, circular objects with a slight glow, scattered throughout the environment.
*   **Treasure Chests:** Wooden chests with metal bands, glowing with a purple light, hidden in various locations throughout the environment.
*   **Bonus Items:** Other bonus items could include bubbles, power-ups, or other unique objects, with varying visual designs.

## 8. Lighting and Effects
*   **Caustics:** Light patterns on the seabed caused by the refraction of light through water, with a subtle movement effect.
*   **God Rays:** Light rays filtering through the water, creating a sense of depth and atmosphere, with a subtle movement effect.
*   **Ambient Occlusion:** Soft shadows in corners and crevices, to add depth and realism to the scene.
*   **Particle Effects:** Bubbles and other particle effects, to enhance the underwater feel and create a more immersive experience.

## 9. Font
*   **UI Font:** A clear and readable sans-serif font (Arial, Helvetica, sans-serif) will be used for all UI elements.
*   **Game Font:** A slightly stylized font ("Bangers", cursive or similar) will be used for titles and other important text.

## 10. Sound Design
*   **Ambient Sounds:** Underwater sounds, such as bubbles, water currents, and distant marine life, will be used to create an immersive and realistic underwater atmosphere.
*   **Sound Effects:** Sound effects will be used for movement, collection, combat, and interaction, to provide feedback to the player and enhance the gameplay experience.

## 11. Libraries and Tools
*   **3D Game Engine:** Three.js
*   **3D Modeling Software:** Blender
*   **Text Editor:** VSCode
*   **Version Control:** Git

## 12. Testing
*   **Visual Inspection:** The visual style, UI elements, special items, lighting, effects, and fonts should be inspected to ensure they meet the design requirements.
*   **Usability Testing:** The UI elements and sound design should be tested to ensure they are clear, intuitive, and easy to use.
*   **Performance Testing:** The game should be tested on different browsers and devices to ensure it runs smoothly.
*   **Color Blindness Testing:** The color palette should be tested to ensure it is accessible to players with color blindness.