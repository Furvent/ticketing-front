export enum TicketStatus {
  OPENED = "Opened",
  ALLOCATED = "Allocated",
  DONE = "Done",
  CLOSED = "Closed",
}

export const getAllStatus = () => {
  return Object.keys(TicketStatus).map(key => {
    return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
  });
}