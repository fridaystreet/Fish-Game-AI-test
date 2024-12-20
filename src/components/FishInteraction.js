import * as THREE from 'three';

export class FishInteraction {
    constructor(fishModel) {
        this.fishModel = fishModel;
    }

    interact(interactable) {
        // Trigger interaction with interactable object
    }

    onProximity(interactable, player) {
        const distance = this.fishModel.position.distanceTo(interactable.model.position);
         if (distance < 2) {
            player.canInteract = true;
        } else {
            player.canInteract = false;
        }
    }
}
