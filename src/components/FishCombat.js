import * as THREE from 'three';

export class FishCombat {
    constructor(fishModel, attackPower) {
        this.fishModel = fishModel;
        this.attackPower = attackPower;
    }

    attack(predator) {
        // Trigger attack animation and apply damage
        this.fishModel.scale.set(1.2, 1.2, 1.2);
        setTimeout(() => {
            this.fishModel.scale.set(1, 1, 1);
        }, 100);
    }

    onProximity(predator) {
        // Check if player is within proximity of a predator
    }
}