import { Fish } from './Fish';
import * as THREE from 'three';

describe('Fish', () => {
    it('should create a Fish instance', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new Fish(geometry, material);
        expect(fish).toBeInstanceOf(Fish);
        expect(fish.model.geometry).toBe(geometry);
        expect(fish.model.material).toBe(material);
    });

    it('should add a skin to the fish', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new Fish(geometry, material);
        const skinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const skin = { name: 'blue', material: skinMaterial };
        fish.addSkin(skin);
        expect(fish.skins).toContain(skin);
    });

    it('should apply a skin to the fish', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new Fish(geometry, material);
        const skinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const skin = { name: 'blue', material: skinMaterial };
        fish.addSkin(skin);
        fish.applySkin(skin);
        expect(fish.model.material).toBe(skinMaterial);
        expect(fish.currentSkin).toBe(skin);
    });

    it('should create a fish with a different geometry and material', () => {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const fish = new Fish(geometry, material);
        expect(fish.model.geometry).toBe(geometry);
        expect(fish.model.material).toBe(material);
    });
});