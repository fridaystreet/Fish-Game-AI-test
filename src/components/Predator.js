import * as THREE from 'three';

export class Predator {
    constructor(scene, fishSpecies, predatorType = 'basic') {
        this.scene = scene;
        this.fishSpecies = fishSpecies;
        this.predatorType = predatorType;
        this.speed = 1;
        this.time = 0;
        this.health = 3;
        this.isHit = false;
        this.hitTime = 0;
        this.patrolArea = new THREE.Vector3(0, 0, -8);

        switch (this.predatorType) {
            case 'shark':
                this.createSharkModel();
                break;
            default:
                this.createBasicPredatorModel();
                break;
        }
    }

    createBasicPredatorModel() {
        this.model = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        this.scene.add(this.model);
        this.model.position.copy(this.patrolArea);
    }

    createSharkModel() {
         // Create a shark body (a cone for now)
        const bodyGeometry = new THREE.ConeGeometry(0.5, 1.5, 32);
        const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 }); // Gray color
        this.model = new THREE.Mesh(bodyGeometry, bodyMaterial);
        this.model.rotation.x = Math.PI / 2;
        this.scene.add(this.model);
        this.model.position.copy(this.patrolArea);
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

        if (this.isHit) {
            this.hitTime += deltaTime;
            if (this.hitTime > 0.2) {
                this.isHit = false;
                this.hitTime = 0;
                this.model.material.color.set(0xff0000);
            }
        }
    }

    takeDamage(damage) {
        this.health -= damage;
        this.playHitAnimation();
    }

    playHitAnimation() {
        this.isHit = true;
        this.model.material.color.set(0x0000ff);
    }
}