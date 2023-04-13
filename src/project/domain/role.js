import { verify } from "../../shared/verify.js";

export default class Role {
  name;

  constructor(name) {
    verify("valid role", typeof name == "string" || !!name);
    Object.freeze(Object.assign(this, { name }));
  }

  equals(role) {
    return this.name === role.name;
  }
}
