import { verify } from "../../shared/verify.js";
import { TeamMemberRemovedFromTeamEvent } from "./events.js";

export default class Team {
  id;
  #teamMemberIds = [];
  #eventBus;

  constructor({ id, eventBus }) {
    verify("valid id", id != null);
    Object.defineProperty(this, "id", { value: id, writable: false });
    this.#eventBus = eventBus;
  }

  addMember(teamMemberId) {
    verify("team member is new", !this.#teamMemberIds.includes(teamMemberId));
    this.#teamMemberIds.push(teamMemberId);
  }

  removeMember(teamMemberIdToRemove) {
    const indexToRemove = this.#teamMemberIds.indexOf(teamMemberIdToRemove);
    if (indexToRemove === -1) return;
    this.#teamMemberIds.splice(indexToRemove, 1);
    this.#eventBus.publish(
      new TeamMemberRemovedFromTeamEvent({
        teamId: this.id,
        teamMemberId: teamMemberIdToRemove,
      })
    );
  }

  get teamMemberIds() {
    return this.#teamMemberIds.slice();
  }
}
