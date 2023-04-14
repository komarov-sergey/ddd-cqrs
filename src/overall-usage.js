import Role from "./project/domain/role.js";
import TeamMember from "./project/domain/team-member.js";
import TaskBoard from "./task-board/domain/task-board.js";
import Task from "./task-board/domain/task.js";

import Team from "./project/domain/team.js";
import EventBus from "./shared/event-bus.js";
import { generateId } from "./shared/generate-id.js";
import taskBoardSynchronization from "./task-board/application/task-board-synchronization.js";

const eventBus = new EventBus();

const teamMember = new TeamMember({
  id: generateId(),
  userId: generateId(),
  role: new Role("developer"),
});
const team = new Team({ id: generateId(), eventBus });
team.addMember(teamMember.id);

const taskBoard = new TaskBoard({ id: generateId() });
taskBoardSynchronization.activateTaskAssigneeSynchronization({
  eventBus,
  taskBoard,
});

const task = new Task({ id: generateId(), title: "write tests" });
taskBoard.addTask(task);
task.description = "write unit tests for new feature";
task.assigneeId = teamMember.id;
task.status = "in progress";

console.log(`assignee: ${task.assigneeId}, status: ${task.status}`);
team.removeMember(teamMember.id);
setTimeout(
  () => console.log(`assignee: ${task.assigneeId}, status: ${task.status}`),
  0
);
