import * as mc from "@minecraft/server";

export default class ControlsScoreboard {

    /**
     * The name of the objective.
     * @type {string} - The name of the objective.
     */
    private objectname: string;

    /**
     * The player to get the scoreboard from.
     * @type {mc.Player} - The player to get the scoreboard from.
     */
    private player: mc.Player;

    /**
     * The scoreboard of the player.
     * @type {mc.Scoreboard} - The scoreboard of the player.
     */
    private scoreboard: mc.Scoreboard

    /**
     * Create a scoreboard object associated with a player and objective.
     * @param {string} objectname - The name of the objective.
     * @param {mc.Player} player - The player to get the scoreboard from.
     */
    constructor(objectname: string, player: mc.Player)
    /**
     * Get the objective of the scoreboard.
     * @returns {mc.ScoreboardObjective} The objective of the scoreboard.
     */
    private get objective(): mc.ScoreboardObjective
    /**
     * Get the value of the scoreboard.
     * @returns {number} The value of the scoreboard.
     */
    public get score(): number
    /**
     * Set the value of the scoreboard.
     * @param {number} score The value to set the scoreboard to.
     * @returns set The value of the scoreboard.
     */
    public set(score: number): this

    /**
     * Add a value to the scoreboard.
     * @param {number} score The value to add to the scoreboard.
     * @returns add The value of the scoreboard.
     */
    public add(score: number): this

    /**
     * Remove a value to the scoreboard.
     * @param {number} score The value to remove from the scoreboard.
     * @returns remove The value of the scoreboard.
     */
    public remove(score: number): this

    /**
     * Reset the scoreboard to 0.
     * @returns reset The value of the scoreboard.
     */
    public reset(): this
}
