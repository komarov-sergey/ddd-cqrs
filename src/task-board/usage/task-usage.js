import { generateId } from "../../shared/generate-id.js";
import Task from "../domain/task.js";

const task = new Task({ id: generateId(), title: "write tests" });
task.description = "write unit tests for new feature";
task.assigneeId = generateId();
task.status = "in progress";
console.log(task);
