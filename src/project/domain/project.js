import { verify } from "../../shared/verify.js";

export default class Project {
  id;
  #name;
  ownerId;
  teamId;
  taskBoardId;

  constructor({ id, name, ownerId, teamId, taskBoardId }) {
    verify(
      id && name && ownerId && teamId && taskBoardId,
      "valid project data"
    );
    Object.defineProperties(this, {
      id: { value: id, writable: false },
      ownerId: { value: ownerId, writable: false },
      teamId: { value: teamId, writable: false },
      taskBoardId: { value: taskBoardId, writable: false },
    });
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    verify("valid name", typeof name === "string" && name.length > 0);
    this.#name = name;
  }
}
