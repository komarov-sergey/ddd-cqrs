import { verify } from "../../shared/verify.js";

import Role from "./role.js";

export default class TeamMember {
  id;
  userId;
  #role;

  constructor({ id, userId, role }) {
    verify("valid id", id != null);
    verify("valid user id", userId != null);
    Object.defineProperty(this, "id", { value: id, writable: false });
    Object.defineProperty(this, "userId", { value: userId, writable: false });
    this.role = role;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    verify("valid role", role.constructor === Role);
    this.#role = role;
  }
}
