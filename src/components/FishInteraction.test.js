import { FishInteraction } from './FishInteraction';
import * as THREE from 'three';

describe('FishInteraction', () => {
    it('should create a FishInteraction instance', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishInteraction = new FishInteraction(fish);
        expect(fishInteraction).toBeInstanceOf(FishInteraction);
    });

    it('should set canInteract to true when interactable is in proximity', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishInteraction = new FishInteraction(fish);
        const interactableGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const interactableMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 });
        const interactable = { model: new THREE.Mesh(interactableGeometry, interactableMaterial) };
        interactable.model.position.set(1, 0, 0);
        fish.position.set(0,0,0);
        const player = { canInteract: false };
        fishInteraction.onProximity(interactable, player);
        expect(player.canInteract).toBe(true);
    });

    it('should set canInteract to false when interactable is not in proximity', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishInteraction = new FishInteraction(fish);
        const interactableGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const interactableMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 });
        const interactable = { model: new THREE.Mesh(interactableGeometry, interactableMaterial) };
        interactable.model.position.set(10, 0, 0);
        fish.position.set(0,0,0);
        const player = { canInteract: true };
        fishInteraction.onProximity(interactable, player);
        expect(player.canInteract).toBe(false);
    });
});
