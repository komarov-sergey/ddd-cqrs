import { verify } from "../../shared/verify.js";

const emailRegex = /^[^ @]+@[^ .]+\.[^ .]+$/;

export default class EmailAddress {
  value;

  constructor(value) {
    verify("valid e-mail", emailRegex.test(value));
    Object.freeze(Object.assign(this, { value }));
  }

  equals(emailAddress) {
    return this.value === emailAddress.value;
  }
}
