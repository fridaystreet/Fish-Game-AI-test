import { CameraControls } from './CameraControls';
import * as THREE from 'three';

describe('CameraControls', () => {
  it('should create a CameraControls instance', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    expect(cameraControls).toBeInstanceOf(CameraControls);
  });

  it('should update the camera rotation', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    const geometry = new THREE.ConeGeometry(0.5, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
    const fish = new THREE.Mesh(geometry, material);
    cameraControls.update(fish);
    expect(fish.rotation.y).toBe(0);
  });

  it('should return the camera direction', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    const direction = cameraControls.getDirection();
    expect(direction).toBeInstanceOf(THREE.Vector3);
  });
});