import * as THREE from 'three';

export class InputManager {
    constructor(domElement) {
        this.domElement = domElement;
        this.domElement.addEventListener('click', this.onMouseClick.bind(this));
    }

    onMouseClick(event) {
        console.log('Mouse click event');
        this.handleMouseClick(event);
    }

    handleMouseClick(event) {
        // This method can be overridden in tests
    }

    isNearPredator(player) {
        // Check if player is near a predator
    }

    isNearInteractable(player) {
        // Check if player is near an interactable object
    }
}
