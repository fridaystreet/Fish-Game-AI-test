import * as THREE from 'three';

export class TreasureChest {
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
        this.isOpened = true;
    }
}