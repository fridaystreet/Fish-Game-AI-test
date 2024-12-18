import { Predator } from './Predator';
import * as THREE from 'three';

describe('Predator', () => {
    it('should create a Predator instance', () => {
        const scene = new THREE.Scene();
        const predator = new Predator(scene, 'clownfish');
        expect(predator).toBeInstanceOf(Predator);
        expect(predator.model).toBeInstanceOf(THREE.Mesh);
    });

    it('should patrol the area', () => {
        const scene = new THREE.Scene();
        const predator = new Predator(scene, 'clownfish');
        const initialPosition = predator.model.position.clone();
        const mockFish = { model: { position: new THREE.Vector3(0, 0, -10) } };
        predator.update(0.016, mockFish.model.position);
        expect(predator.model.position.z).toBeLessThan(initialPosition.z);
    });

    it('should chase the player', () => {
        const scene = new THREE.Scene();
        const predator = new Predator(scene, 'clownfish');
        const initialPosition = predator.model.position.clone();
        const mockFish = { model: { position: new THREE.Vector3(1, 0, -7) } };
        predator.update(0.016, mockFish.model.position);
        expect(predator.model.position.z).toBeGreaterThan(initialPosition.z);
    });

    it('should take damage', () => {
        const scene = new THREE.Scene();
        const predator = new Predator(scene, 'clownfish');
        const initialHealth = predator.health;
        predator.takeDamage(1);
        expect(predator.health).toBe(initialHealth - 1);
    });

    it('should play hit animation', () => {
        const scene = new THREE.Scene();
        const predator = new Predator(scene, 'clownfish');
        const initialColor = predator.model.material.color.clone();
        predator.playHitAnimation();
        expect(predator.model.material.color).not.toEqual(initialColor);
    });
});
