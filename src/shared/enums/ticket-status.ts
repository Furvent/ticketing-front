export enum TicketStatus {
  OPENED = "Opened",
  ALLOCATED = "Allocated",
  DONE = "Done",
  CLOSED = "Closed",
}

export const getAllStatus = () => {
  return Object.keys(TicketStatus).map(key => key);
}