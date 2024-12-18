import { FishCombat } from './FishCombat';
import * as THREE from 'three';

describe('FishCombat', () => {
    it('should create a FishCombat instance', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1);
        expect(fishCombat).toBeInstanceOf(FishCombat);
        expect(fishCombat.attackPower).toBe(1);
    });

    it('should apply damage to the predator', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const predator = new THREE.Mesh(predatorGeometry, predatorMaterial);
        fishCombat.attack(predator);
        expect(fish.scale.x).toBe(1.2);
    });
});