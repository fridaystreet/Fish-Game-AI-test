import { FishMovement } from './FishMovement';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

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

describe('FishMovement', () => {
    let fish;
    let world;
    let body;
    let audioListener;

    beforeEach(() => {
        const geometry = new THREE.ConeGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        fish = new THREE.Mesh(geometry, material);
        world = {
            addBody: jest.fn(),
            step: jest.fn(),
        };
        body = new CANNON.Body({ mass: 1 });
        audioListener = new THREE.AudioListener();
    });

    it('should create a FishMovement instance', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        expect(fishMovement).toBeInstanceOf(FishMovement);
        expect(fishMovement.speed).toBe(1);
    });

    it('should update the fish position', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        fishMovement.update(0.016);
        expect(fish.position.z).toBeCloseTo(-0.016);
    });

    it('should apply a force to the fish', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        const force = new THREE.Vector3(1, 0, 0);
        fishMovement.applyForce(force);
        expect(fishMovement.velocity.x).toBe(1);
    });

    it('should apply drag to the fish', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        fishMovement.velocity.set(1, 0, 0);
        fishMovement.applyDrag(0.5);
        expect(fishMovement.velocity.x).toBe(0.5);
    });

    it('should activate speed boost', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        fishMovement.speedBoost();
        expect(fishMovement.speedBoostActive).toBe(true);
    });

    it('should update the fish position based on time', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        fishMovement.update(0.016);
        expect(fish.position.z).toBeCloseTo(-0.016);
    });

    it('should deactivate speed boost after timer', () => {
        const fishMovement = new FishMovement(fish, 1, world, body, audioListener);
        fishMovement.speedBoost();
        fishMovement.update(1.1);
        expect(fishMovement.speedBoostActive).toBe(false);
    });
});
