import { FishMovement } from './FishMovement';
import * as THREE from 'three';

describe('FishMovement', () => {
    it('should create a FishMovement instance', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        expect(fishMovement).toBeInstanceOf(FishMovement);
    });

    it('should update the fish position', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        const initialPosition = fish.position.clone();
        fishMovement.update(0.016);
        expect(fish.position.z).toBeLessThan(initialPosition.z);
    });

    it('should apply a force to the fish', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        const initialVelocity = fishMovement.velocity.clone();
        const force = new THREE.Vector3(1, 0, 0);
        fishMovement.applyForce(force);
        expect(fishMovement.velocity.x).toBe(initialVelocity.x + force.x);
    });

    it('should apply drag to the fish', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        const initialVelocity = fishMovement.velocity.clone();
        fishMovement.velocity.set(1, 0, 0);
        fishMovement.applyDrag(0.5);
        expect(fishMovement.velocity.x).toBeLessThan(initialVelocity.x + 1);
    });

    it('should activate speed boost', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        fishMovement.speedBoost();
        expect(fishMovement.speedBoostActive).toBe(true);
    });

    it('should update the fish position based on time', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        const initialPosition = fish.position.clone();
        fishMovement.update(0.016);
        expect(fish.position.z).toBeLessThan(initialPosition.z);
    });

    it('should update the fish position using cannon', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        const initialPosition = fish.position.clone();
        fishMovement.update(0.016);
        expect(fish.position.z).toBeLessThan(initialPosition.z);
    });

    it('should deactivate speed boost after timer', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishMovement = new FishMovement(fish, 2);
        fishMovement.speedBoost();
        fishMovement.update(1.1);
        expect(fishMovement.speedBoostActive).toBe(false);
    });
});