import * as THREE from 'three';

export class Coin {
    constructor(scene, position, value) {
        this.scene = scene;
        this.position = position;
        this.value = value;
        this.model = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
        this.model.position.copy(position);
        this.scene.add(this.model);
    }

    update() {
        // Update coin animation
    }

    onCollision(player) {
        player.consecutiveCoinCount++;
        if (player.consecutiveCoinCount > 1) {
            player.setBonusMultiplier(1 + (player.consecutiveCoinCount * 0.1));
        }
        player.addXP(this.value);
        this.scene.remove(this.model);
        setTimeout(() => {
            player.resetBonusMultiplier();
            player.consecutiveCoinCount = 0;
        }, 1000);
    }
}