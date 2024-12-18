import { FishMovement } from './FishMovement';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Mock THREE.Audio
jest.mock('three', () => {
  const originalTHREE = jest.requireActual('three');
  return {
    ...originalTHREE,
    Audio: jest.fn(() => ({
      setVolume: jest.fn(),
      setBuffer: jest.fn(),
      play: jest.fn(),
    })),
    AudioLoader: jest.fn(() => ({
      load: jest.fn((url, onLoad) => onLoad({})),
    })),
  };
});

describe('FishMovement', () => {
  let world;
  let body;
  let fish;
  let geometry;
  let material;

  beforeEach(() => {
    world = new CANNON.World();
    body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(1),
    });
    world.addBody(body);
    geometry = new THREE.ConeGeometry(0.5, 1, 32);
    material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
    fish = new THREE.Mesh(geometry, material);
    THREE.Vector3.prototype.clone = function () {
      return new THREE.Vector3(this.x, this.y, this.z);
    };
  });

  it('should create a FishMovement instance', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    expect(fishMovement).toBeInstanceOf(FishMovement);
  });

  it('should update the fish position', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    const initialPosition = fish.position.clone();
    fishMovement.update(0.016);
    expect(fish.position.z).toBeLessThan(initialPosition.z);
  });

  it('should apply a force to the fish', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    const initialVelocity = fishMovement.velocity.clone();
    const force = new THREE.Vector3(1, 0, 0);
    fishMovement.applyForce(force);
    expect(fishMovement.velocity.x).toBe(initialVelocity.x + force.x);
  });

  it('should apply drag to the fish', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    const initialVelocity = fishMovement.velocity.clone();
    fishMovement.velocity.set(1, 0, 0);
    fishMovement.applyDrag(0.5);
    expect(fishMovement.velocity.x).toBeLessThan(initialVelocity.x + 1);
  });

  it('should activate speed boost', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    fishMovement.speedBoost();
    expect(fishMovement.speedBoostActive).toBe(true);
  });

  it('should update the fish position based on time', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    const initialPosition = fish.position.clone();
    fishMovement.update(0.016);
    expect(fish.position.z).toBeLessThan(initialPosition.z);
  });


  it('should deactivate speed boost after timer', () => {
    const fishMovement = new FishMovement(fish, 2, world, body);
    fishMovement.speedBoost();
    fishMovement.update(1.1);
    expect(fishMovement.speedBoostActive).toBe(false);
  });
});
