import * as THREE from 'three';

export class Fish {
    constructor(geometry, material) {
        this.model = new THREE.Mesh(geometry, material);
        this.skins = [];
        this.currentSkin = null;
    }

    addSkin(skin) {
        this.skins.push(skin);
    }

    applySkin(skin) {
        if (this.skins.includes(skin)) {
            this.model.material = skin.material;
            this.currentSkin = skin;
        }
    }
}