import { verify } from "../../shared/verify.js";

export default class Team {
  id;
  #teamMemberIds = [];

  constructor({ id }) {
    verify("valid id", id != null);
    Object.defineProperty(this, "id", { value: id, writable: false });
  }

  addMember(teamMemberId) {
    verify("team member is new", !this.#teamMemberIds.includes(teamMemberId));
    this.#teamMemberIds.push(teamMemberId);
  }

  removeMember(teamMemberIdToRemove) {
    const indexToRemove = this.#teamMemberIds.indexOf(teamMemberIdToRemove);
    if (indexToRemove === -1) return;
    this.#teamMemberIds.splice(indexToRemove, 1);
  }

  get teamMemberIds() {
    return this.#teamMemberIds.slice();
  }
}
