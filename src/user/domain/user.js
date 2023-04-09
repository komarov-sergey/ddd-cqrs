import { verify } from "../../shared/verify.js";

import EmailAddress from "./email-address.js";
import Role from "./role.js";

export default class User {
  id;
  #username;
  #emailAddress;
  #password;
  #role;
  #emailRegistry;

  constructor({ id, username, emailAddress, password, role, emailRegistry }) {
    verify("valid id", id != null);
    this.#emailRegistry = emailRegistry;
    Object.defineProperty(this, "id", { value: id, writable: false });
    Object.assign(this, { username, emailAddress, password, role });
  }

  get username() {
    return this.#username;
  }

  set username(username) {
    verify("valid username", typeof username == "string" && username != null);
    this.#username = username;
  }

  get emailAddress() {
    return this.#emailAddress;
  }

  set emailAddress(emailAddress) {
    verify("unused e-mail", this.#emailRegistry.isEmailAvailable(emailAddress));
    verify("valid e-mail", emailAddress.constructor === EmailAddress);
    this.#emailAddress = emailAddress;
    this.#emailRegistry.setUserEmailAddress(this.id, this.#emailAddress);
  }

  get password() {
    return this.#password;
  }

  set password(password) {
    verify("valid password", typeof password == "string" && !!password);
    this.#password = password;
  }

  isPasswordMatching(password) {
    return this.password === password;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    verify("valid role", role.constructor === Role);
    this.#role = role;
  }
}
