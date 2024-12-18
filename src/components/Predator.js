import * as THREE from 'three';

export class Predator {
    constructor(scene, fishSpecies) {
        this.scene = scene;
        this.fishSpecies = fishSpecies;
        this.model = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        this.scene.add(this.model);
        this.patrolArea = new THREE.Vector3(0, 0, -8);
        this.model.position.copy(this.patrolArea);
        this.speed = 1;
        this.time = 0;
    }

    update(deltaTime, playerPosition) {
        // Implement basic AI for patrol and chase behavior
        const distance = this.model.position.distanceTo(playerPosition);
        this.time += deltaTime;
        if (distance < 5) {
            // Chase the player
            const direction = playerPosition.clone().sub(this.model.position).normalize();
            this.model.position.add(direction.multiplyScalar(this.speed * deltaTime));
        } else {
            // Patrol the area
            const angle = this.time * 0.5;
            this.model.position.x = this.patrolArea.x + Math.cos(angle) * 2;
            this.model.position.z = this.patrolArea.z + Math.sin(angle) * 2;
        }
    }

    takeDamage(damage) {
        // Apply damage to the predator
    }

    playHitAnimation() {
        // Play a hit animation
    }
}