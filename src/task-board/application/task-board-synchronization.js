const taskBoardSynchronization = {
  activateTaskAssigneeSynchronization({ eventBus, taskBoard }) {
    eventBus.subscribe(
      "TeamMemberRemovedFromTeam",
      ({ data: { teamMemberId } }) => {
        const tasks = taskBoard.getTasks();
        const assignedTasks = tasks.filter(
          (task) => task.assigneeId === teamMemberId
        );
        assignedTasks.forEach((task) => {
          if (task.status === "in progress") task.status = "todo";
          task.assigneeId = undefined;
        });
      }
    );
  },
};

export default taskBoardSynchronization;
