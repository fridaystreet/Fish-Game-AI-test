import * as THREE from 'three';
import FishModel from './FishModel.js';

export class Fish {
    constructor(fishType = 'basic') {
        this.fishModel = new FishModel(fishType);
        this.model = this.fishModel.getModel();
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