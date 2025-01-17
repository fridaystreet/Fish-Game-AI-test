import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class FishMovement {
    constructor(fish, speed, world, body, audioListener) {
        this.fish = fish;
        this.speed = speed;
        this.world = world;
        this.body = body;
        this.speedBoostActive = false;
        this.speedBoostDuration = 1; // Duration of speed boost in seconds
        this.speedBoostTimer = 0;
        this.audioLoader = new THREE.AudioLoader();
        this.speedBoostSound = new THREE.Audio(audioListener);
        this.speedBoostSoundBuffer = null;
        this.audioLoader.load('assets/coin.mp3', (buffer) => {
            this.speedBoostSound.setBuffer(buffer);
            this.speedBoostSound.setVolume(0.5);
            this.speedBoostSoundBuffer = buffer;
        });

        // Initialize velocity
        this.velocity = new THREE.Vector3();

        this.movementSound = new THREE.Audio(audioListener);
        this.audioLoader.load('assets/underwater.mp3', (buffer) => {
            this.movementSound.setBuffer(buffer);
            this.movementSound.setLoop(true);
            this.movementSound.setVolume(0.5);
        });
    }

    update(deltaTime) {
        // Apply drag
        const drag = this.speedBoostActive ? 0.1 : 0.5;
        this.applyDrag(drag);

        // Update velocity based on movement
        this.velocity.z = -this.speed;

        // Apply speed boost if active
        if (this.speedBoostActive) {
            this.velocity.z *= 2;
            this.speedBoostTimer += deltaTime;
            if (this.speedBoostTimer >= this.speedBoostDuration) {
                this.speedBoostActive = false;
                this.speedBoostTimer = 0;
            }
        }

        // Update position based on velocity
        this.fish.position.x += this.velocity.x * deltaTime;
        this.fish.position.y += this.velocity.y * deltaTime;
        this.fish.position.z += this.velocity.z * deltaTime;

        // Update Cannon.js body position
        this.body.position.copy(this.fish.position);

        // Update Three.js mesh position based on Cannon.js body
        this.fish.position.copy(this.body.position);

        // Play movement sound if not already playing and buffer is loaded
        if (this.movementSound.buffer && !this.movementSound.isPlaying) {
            this.movementSound.play();
        }
    }

    applyForce(force) {
        this.velocity.add(force);
    }

    applyDrag(dragCoefficient) {
        const dragForce = this.velocity.clone().multiplyScalar(-dragCoefficient);
        this.velocity.add(dragForce);
    }

    speedBoost() {
        this.speedBoostActive = true;
        this.speedBoostTimer = 0;
        if (this.speedBoostSoundBuffer) {
            this.speedBoostSound.play();
        }
    }
}
