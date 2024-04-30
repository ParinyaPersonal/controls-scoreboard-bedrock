import * as mc from "@minecraft/server";

export default class ControlsScoreboard {

    private objectname: string;

    private player: mc.Player;

    private scoreboard: mc.Scoreboard = mc.world.scoreboard;

    constructor(objectname: string, player: mc.Player) {
        this.objectname = objectname;
        this.player = player;
        player.runCommand(`scoreboard players add @s ${objectname} 0`);
        try {
            this.objective.isValid()
        } catch {
            this.scoreboard.addObjective(objectname);
        }
    }

    private get objective(): mc.ScoreboardObjective {
        return this.scoreboard.getObjective(this.objectname);
    }

    public get score(): number {
        return this.objective?.getScore(this.player.scoreboardIdentity);
    }

    public set(score: number) {
        this.objective?.setScore(this.player.scoreboardIdentity, score);
        return this;
    }

    public add(score: number) {
        this.set(this.score + score);
        return this;
    }

    public remove(score: number) {
        this.set(this.score - score);
        return this;
    }

    public reset(): this {
        this.set(0);
        return this;
    }
}
