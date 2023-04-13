import { generateId } from "../../shared/generate-id.js";
import Project from "../domain/project.js";
import Role from "../domain/role.js";
import TeamMember from "../domain/team-member.js";
import Team from "../domain/team.js";

const teamMember = new TeamMember({
  id: generateId(),
  userId: generateId(),
  role: new Role("developer"),
});
const team = new Team({ id: generateId() });
team.addMember(teamMember.id);
const project = new Project({
  id: generateId(),
  name: "example project",
  teamId: team.id,
  taskBoardId: generateId(),
});
team.removeMember(teamMember.id);
console.log(project);
