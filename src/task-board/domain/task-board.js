import { verify } from "../../shared/verify.js";

import Task from "./task.js";

export default class TaskBoard {
  id;
  #tasks = [];

  constructor({ id }) {
    verify("valid id", id != null);
    Object.defineProperty(this, "id", { value: id, writable: false });
  }

  addTask(task) {
    verify("valid task", task instanceof Task);
    verify("task is new", !this.#tasks.includes(task));
    this.#tasks.push(task);
  }

  removeTask(taskToRemove) {
    const taskIndex = this.#tasks.indexOf(taskToRemove);
    verify("task is on board", taskIndex > -1);
    this.#tasks.splice(taskIndex, 1);
  }

  getTasks(status = "") {
    if (status === "") return this.#tasks.slice();
    return this.#tasks.filter((task) => task.status === status);
  }
}
