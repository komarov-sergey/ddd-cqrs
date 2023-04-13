import { generateId } from "../../shared/generate-id.js";
import Project from "../domain/project.js";
import Role from "../domain/role.js";
import TeamMember from "../domain/team-member.js";
import Team from "../domain/team.js";

const projectId = generateId(),
  teamId = generateId(),
  teamMemberId = generateId(),
  userId = generateId(),
  taskBoardId = generateId();

const team = new Team({ id: teamId });
const project = new Project({
  id: projectId,
  ownerId: userId,
  name: "my project",
  teamId,
  taskBoardId,
});

const teamMember = new TeamMember({
  id: teamMemberId,
  userId,
  role: new Role("developer"),
});
team.addMember(teamMember.id);
[project, team, teamMember].forEach((item) => console.log(item));
console.log(team.teamMemberIds);
