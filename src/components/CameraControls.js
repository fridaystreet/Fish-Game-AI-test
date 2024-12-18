import * as THREE from 'three';

export class CameraControls {
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.mouse = new THREE.Vector2();
        this.sensitivity = 0.002;
        this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.pitch = 0;
        this.yaw = 0;
    }

    update(fish) {
        this.camera.rotation.set(this.pitch, this.yaw, 0);
        if (fish) {
            fish.rotation.y = this.yaw;
        }
    }

    onMouseMove(event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;

        const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        this.yaw -= movementX * this.sensitivity;
        this.pitch -= movementY * this.sensitivity;

        this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));
    }

    getDirection() {
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);
        return direction;
    }
}