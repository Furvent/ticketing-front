export type GeneralDashboardData = {
  groupsData: GroupData[];
}

export type GroupDashboardData = {
  groupData: GroupData;
  ticketsData: TicketData[];
  commentsToDisplay: Comment[];
}

export type GroupData = {
  id: number;
  creatorId: number;
  name: string;
  users: PublicUser[];
  creationDateGroup: string;
}

export type PublicUser = {
  id: number;
  pseudo: string;
}

export type UserData = {
  id: number;
  username: string;
  pseudo: string;
  creationAccountDate: string;
};

export type NewUser = {
  username: string;
  password: string;
  pseudo: string;
}

export type LoginForm = {
  username: string;
  password: string;
}

export type UpdatedUser = {
  username: string;
  newPassword: string;
  oldPassword: string;
  newPseudo: string;
}

export type NewGroup = {
  name: string;
	creatorId: number;
}

export type NewTicket = {
  groupId: number;
	title: string;
  description: string;
	usersOnTask: PublicUser[];
}

export type TicketData = {
  id: number;
  title: string;
  description: string;
  history: StatusData[];
  usersOnTask: PublicUser[];
  commentsToDisplay: Comment[];
}

export type UpdatedTicket = {
  ticketId: number;
	newTitle: string;
  newDescription: string;
  newStatus: string;
	usersOnTask: PublicUser[];
}

export type StatusData = {
  label: string;
  date: string;
}

export type NewComment = {
  entityId: number;
	entityType: string;
  text: string;
  author: string;
}

export type Comment = {
  text: string;
  author: string;
	creationDate: string;
}