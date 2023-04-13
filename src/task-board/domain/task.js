import { verify } from "../../shared/verify.js";

const validStatus = ["todo", "in progress", "done"];

export default class Task {
  id;
  #title;
  #description;
  #status;
  #assigneeId;

  constructor({ id, title, description = "", status = "todo", assigneeId }) {
    verify("valid id", id != null);
    Object.defineProperty(this, "id", { value: id, writable: false });
    Object.assign(this, { title, description, status, assigneeId });
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    verify("valid description", typeof description == "string");
    this.#description = description;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    verify("valid title", typeof title == "string" && !!title);
    this.#title = title;
  }

  get status() {
    return this.#status;
  }

  set status(status) {
    verify("valid status", validStatus.includes(status));
    verify(
      "active task assignee",
      status !== "in progress" || !!this.assigneeId
    );
    this.#status = status;
  }

  get assigneeId() {
    return this.#assigneeId;
  }

  set assigneeId(assigneeId) {
    verify("active task assignee", this.status !== "in progress" || assigneeId);
    this.#assigneeId = assigneeId;
  }
}
