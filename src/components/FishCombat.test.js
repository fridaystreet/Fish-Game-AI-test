import { FishCombat } from './FishCombat';
import * as THREE from 'three';

jest.mock('three', () => {
    const originalThree = jest.requireActual('three');
    return {
        ...originalThree,
        FileLoader: jest.fn().mockImplementation(() => ({
            load: jest.fn((url, onLoad) => {
                setTimeout(() => {
                    const buffer = new ArrayBuffer(1);
                    onLoad(buffer);
                }, 0);
            }),
            setResponseType: jest.fn(),
            setRequestHeader: jest.fn(),
        })),
        AudioLoader: jest.fn().mockImplementation(() => ({
            load: jest.fn((path, onLoad) => {
                setTimeout(() => {
                    const buffer = new originalThree.AudioBuffer(new originalThree.AudioContext(), 1, 8000, 1);
                    onLoad(buffer);
                }, 0);
            })
        })),
    };
});

describe('FishCombat', () => {
    let audioListener;

    beforeEach(() => {
        audioListener = new THREE.AudioListener();
    });

    it('should create a FishCombat instance', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        expect(fishCombat).toBeInstanceOf(FishCombat);
        expect(fishCombat.attackPower).toBe(1);
    });

    it('should apply damage to the predator', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
         const predator = { model: new THREE.Mesh(predatorGeometry, predatorMaterial), position: new THREE.Vector3(), takeDamage: jest.fn() };
        const player = { canAttack: true };
        fishCombat.attack(predator, player);
        expect(fish.scale.x).toBe(1.2);
    });

    it('should set canAttack to true when predator is in proximity', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const predator = { model: new THREE.Mesh(predatorGeometry, predatorMaterial), position: new THREE.Vector3(1,0,0) };
        fish.position.set(0,0,0);
        const player = { canAttack: false };
        fishCombat.onProximity(predator, player);
        expect(player.canAttack).toBe(true);
    });

    it('should set canAttack to false when predator is not in proximity', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const predator = { model: new THREE.Mesh(predatorGeometry, predatorMaterial), position: new THREE.Vector3(10,0,0) };
        fish.position.set(0,0,0);
        const player = { canAttack: false };
        fishCombat.onProximity(predator, player);
        expect(player.canAttack).toBe(false);
    });

    it('should apply damage to the predator when attack is called', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const predator = { model: new THREE.Mesh(predatorGeometry, predatorMaterial), takeDamage: jest.fn() };
        const player = { canAttack: true };
        fishCombat.attack(predator, player);
        expect(predator.takeDamage).toHaveBeenCalledWith(1);
    });

    it('should not apply damage to the predator when attack is called and player cannot attack', () => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const fish = new THREE.Mesh(geometry, material);
        const fishCombat = new FishCombat(fish, 1, audioListener);
        const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const predator = { model: new THREE.Mesh(predatorGeometry, predatorMaterial), takeDamage: jest.fn() };
        const player = { canAttack: false };
        fishCombat.attack(predator, player);
        expect(predator.takeDamage).not.toHaveBeenCalled();
    });
});
