import EmailAddress from "../domain/email-address.js";

const email1 = new EmailAddress("test@example.com");
const email2 = new EmailAddress("test@example.com");
console.log(`${email1.value} equals ${email1.value}? ${email1.equals(email2)}`);

new EmailAddress("foobar");
