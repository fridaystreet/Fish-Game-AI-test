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
    cameraControls.update();
    expect(camera.rotation.x).toBe(0);
    expect(camera.rotation.y).toBe(0);
    expect(camera.rotation.z).toBe(0);
  });

  it('should set the turning speed', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    cameraControls.setTurningSpeed(2);
    expect(cameraControls.turningSpeed).toBe(2);
  });

  it('should set the turning radius', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    cameraControls.setTurningRadius(2);
    expect(cameraControls.turningRadius).toBe(2);
  });

  it('should return the camera direction', () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const domElement = document.createElement('canvas');
    const cameraControls = new CameraControls(camera, domElement);
    const direction = cameraControls.getDirection();
    expect(direction).toBeInstanceOf(THREE.Vector3);
  });
});
