export class Player {
    constructor(initialXP = 0) {
        this.xp = initialXP;
    }

    addXP(amount) {
        this.xp += amount;
    }

    getXP() {
        return this.xp;
    }

    setXP(amount) {
        this.xp = amount;
    }
}