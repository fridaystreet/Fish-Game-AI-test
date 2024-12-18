import * as THREE from 'three';

import * as CANNON from 'cannon-es';

export class FishMovement {
    constructor(fishModel, speed) {
        this.fishModel = fishModel;
        this.speed = speed;
        this.velocity = new THREE.Vector3();
        this.speedBoostActive = false;

        this.cannonWorld = new CANNON.World({
            gravity: new CANNON.Vec3(0, 0, 0),
        });

        this.cannonBody = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Sphere(0.5),
            position: new CANNON.Vec3(this.fishModel.position.x, this.fishModel.position.y, this.fishModel.position.z),
        });
        this.cannonWorld.addBody(this.cannonBody);
    }

    update(deltaTime) {
        const direction = new THREE.Vector3(0, 0, -1);
        direction.applyQuaternion(this.fishModel.quaternion);
        let currentSpeed = this.speed;
        if (this.speedBoostActive) {
            currentSpeed *= 2;
            this.speedBoostTimer += deltaTime;
            if (this.speedBoostTimer > 1) {
                this.speedBoostActive = false;
            }
        }
        direction.multiplyScalar(currentSpeed * deltaTime);
        this.fishModel.position.add(direction);

        this.cannonBody.position.copy(this.fishModel.position);
        this.cannonWorld.step(deltaTime);
        this.fishModel.position.copy(this.cannonBody.position);
    }

    applyForce(force) {
        this.velocity.add(force);
    }

    applyDrag(dragCoefficient) {
        const dragForce = this.velocity.clone().multiplyScalar(-dragCoefficient);
        this.applyForce(dragForce);
    }

    speedBoost() {
        this.speedBoostActive = true;
        this.speedBoostTimer = 0;
    }
    
}