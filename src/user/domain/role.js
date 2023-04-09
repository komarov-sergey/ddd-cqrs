import { verify } from "../../shared/verify.js";

const validRoles = ["user", "admin"];

export default class Role {
  name;

  constructor(name) {
    verify("role name", validRoles.includes(name));
    Object.freeze(Object.assign(this, { name }));
  }

  equals(role) {
    return this.name === role.name;
  }
}
