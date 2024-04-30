import * as mc from "@minecraft/server";
export default class ControlsScoreboard {
    objectname;
    player;
    scoreboard = mc.world.scoreboard;
    constructor(objectname, player) {
        this.objectname = objectname;
        this.player = player;
        player.runCommand(`scoreboard players add @s ${objectname} 0`);
        try {
            this.objective.isValid();
        }
        catch {
            this.scoreboard.addObjective(objectname);
        }
    }
    get objective() {
        return this.scoreboard.getObjective(this.objectname);
    }
    get score() {
        return this.objective?.getScore(this.player.scoreboardIdentity);
    }
    set(score) {
        this.objective?.setScore(this.player.scoreboardIdentity, score);
        return this;
    }
    add(score) {
        this.set(this.score + score);
        return this;
    }
    remove(score) {
        this.set(this.score - score);
        return this;
    }
    reset() {
        this.set(0);
        return this;
    }
}
