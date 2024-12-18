import * as THREE from 'three';

class FishModel {
    constructor() {
        this.model = this.createFishModel();
    }

    createFishModel() {
        const geometry = new THREE.BoxGeometry(1, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const fish = new THREE.Mesh(geometry, material);
        return fish;
    }

    getModel() {
        return this.model;
    }
}

export default FishModel;