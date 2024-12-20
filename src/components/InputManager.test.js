import { InputManager } from './InputManager';
import * as THREE from 'three';

describe('InputManager', () => {
    it('should create an InputManager instance', () => {
        const domElement = document.createElement('canvas');
        const inputManager = new InputManager(domElement);
        expect(inputManager).toBeInstanceOf(InputManager);
    });

    it('should call onMouseClick when the canvas is clicked', () => {
        const domElement = document.createElement('canvas');
        const onMouseClick = jest.fn();
        const inputManager = new InputManager(domElement);
        inputManager.handleMouseClick = onMouseClick; // Override handleMouseClick
        domElement.dispatchEvent(new MouseEvent('click'));
        expect(onMouseClick).toHaveBeenCalled();
    });
});
