import { generateId } from "../../shared/generate-id.js";
import Role from "../domain/role.js";
import TeamMember from "../domain/team-member.js";

const teamMember = new TeamMember({
  id: generateId(),
  userId: generateId(),
  role: new Role("developer"),
});
console.log(teamMember);
