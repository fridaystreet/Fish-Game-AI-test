import { Fish } from './Fish';
import * as THREE from 'three';
import FishModel from './FishModel';

describe('Fish', () => {
    it('should create a Fish instance', () => {
        const fish = new Fish('basic');
        expect(fish).toBeInstanceOf(Fish);
        expect(fish.model).toBeDefined();
    });

    it('should add a skin to the fish', () => {
        const fish = new Fish('basic');
        const skinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const skin = { name: 'blue', material: skinMaterial };
        fish.addSkin(skin);
        expect(fish.skins).toContain(skin);
    });

    it('should apply a skin to the fish', () => {
        const fish = new Fish('basic');
        const skinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const skin = { name: 'blue', material: skinMaterial };
        fish.addSkin(skin);
        fish.applySkin(skin);
        expect(fish.model.material).toBe(skinMaterial);
        expect(fish.currentSkin).toBe(skin);
    });
});