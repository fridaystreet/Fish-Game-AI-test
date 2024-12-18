import * as THREE from 'three';

export class Coin {
    constructor(position, value) {
        this.position = position;
        this.value = value;
        this.model = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
        this.model.position.copy(position);
    }

    update() {
        // Update coin animation
    }

    onCollision(player) {
        // Handle collision with player
    }
}