import * as THREE from 'three';

class FishModel {
    constructor() {
        this.model = this.createFishModel();
    }

    createFishModel() {
        const fish = new THREE.Group();

        // Body
        const bodyGeometry = new THREE.ConeGeometry(0.5, 1.5, 10);
        const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = Math.PI / 2;
        fish.add(body);

        // Tail
        const tailGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.1);
        const tailMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const tail = new THREE.Mesh(tailGeometry, tailMaterial);
        tail.position.x = -0.8;
        tail.rotation.y = Math.PI / 4;
        fish.add(tail);

        // Fin
        const finGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.4);
        const finMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const fin1 = new THREE.Mesh(finGeometry, finMaterial);
        fin1.position.y = 0.4;
        fin1.position.z = 0.3;
        fin1.rotation.z = Math.PI / 4;
        fish.add(fin1);

        const fin2 = new THREE.Mesh(finGeometry, finMaterial);
        fin2.position.y = 0.4;
        fin2.position.z = -0.3;
        fin2.rotation.z = -Math.PI / 4;
        fish.add(fin2);

        fish.scale.set(0.5, 0.5, 0.5);
        return fish;
    }

    getModel() {
        return this.model;
    }
}

export default FishModel;