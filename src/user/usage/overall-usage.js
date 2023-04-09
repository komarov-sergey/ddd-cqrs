import { createMd5Hash } from "../../shared/create-md5-hash.js";
import { generateId } from "../../shared/generate-id.js";
import EmailAddress from "../domain/email-address.js";
import emailRegistry from "../domain/email-registry.js";
import Role from "../domain/role.js";
import User from "../domain/user.js";

const userId = generateId(),
  role = new Role("user");
const emailAddress1 = new EmailAddress("john.doe@example.com");
const emailAddress2 = new EmailAddress("john.doe.81@example.com");

const user = new User({
  id: userId,
  username: "johndoe",
  emailAddress: emailAddress1,
  password: createMd5Hash("mypassword"),
  role,
  emailRegistry,
});

user.username = "johndoe81";
user.emailAddress = emailAddress2;
console.log(user);
console.log(
  "is password correct?",
  user.isPasswordMatching(createMd5Hash("mypassword"))
);

console.log("attempt to create user with identical e-mail address");

new User({
  id: generateId(),
  username: "johndoe2",
  emailAddress: emailAddress2,
  password: createMd5Hash("mypassword2"),
  role,
  emailRegistry,
});
