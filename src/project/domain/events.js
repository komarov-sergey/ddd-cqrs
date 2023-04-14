import { createEventType } from "../../shared/event-type-factory.js";

const TeamMemberRemovedFromTeamEvent = createEventType(
  "TeamMemberRemovedFromTeam",
  { teamId: "string", teamMemberId: "string" }
);

export { TeamMemberRemovedFromTeamEvent };
