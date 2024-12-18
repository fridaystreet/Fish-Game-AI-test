import * as THREE from 'three';

export class TreasureChest {
    constructor(scene, position, reward) {
        this.scene = scene;
        this.position = position;
        this.reward = reward;
        this.model = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x800080 }));
        this.model.position.copy(position);
        this.scene.add(this.model);
        this.isOpened = false;
    }

    update() {
        // Update chest animation
    }

    onProximity(player) {
        // Check if player is within proximity
    }

    onInteract(player) {
        if (!this.isOpened) {
            this.isOpened = true;
            player.addXP(this.reward);
            this.scene.remove(this.model);
        }
    }
}