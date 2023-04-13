import Role from '../project/domain/role.js';
import TeamMember from '../project/domain/team-member.js';
import Team from '../project/domain/team.js';
import generateId from '../shared/infrastructure/id-generation/generate-id.js';

import TaskBoard from './domain/task-board.js';
import Task from './domain/task.js';

const removeMemberAndUnassignTasks = (teamMemberId, taskBoard) => {
  const tasks = taskBoard.getTasks();
  const assignedTasks = tasks.filter(task => task.assigneeId === teamMemberId);
  assignedTasks.forEach(task => {
    if (task.status === 'in progress') task.status = 'todo';
    task.assigneeId = null;
  });
  team.removeMember(teamMemberId);
};

const teamMember = new TeamMember({
  id: generateId(), userId: generateId(), role: new Role('developer'),
});
const team = new Team({id: generateId()});
team.addMember(teamMember.id);

const taskBoard = new TaskBoard({id: generateId()});
const task = new Task({id: generateId(), title: 'write tests'});
taskBoard.addTask(task);
task.description = 'write unit tests for new feature';
task.assigneeId = teamMember.id;
task.status = 'in progress';

console.log(taskBoard);
removeMemberAndUnassignTasks(teamMember.id, taskBoard);
console.log(taskBoard);
