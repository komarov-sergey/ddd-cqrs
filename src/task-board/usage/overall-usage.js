import { generateId } from "../../shared/generate-id.js";
import TaskBoard from "../domain/task-board.js";
import Task from "../domain/task.js";

const assigneeId = generateId();
const taskBoard = new TaskBoard({ id: generateId() });
const task = new Task({ id: generateId(), title: "write tests" });
taskBoard.addTask(task);
task.description = "write unit tests for new feature";
task.assigneeId = assigneeId;
task.status = "in progress";
console.log("tasks in progress", taskBoard.getTasks("in progress"));
console.log("attempting to unassign task");
task.assigneeId = undefined;
