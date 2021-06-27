export type GeneralDashboardData = {
  groupsData: GroupData[];
}

export type GroupData = {
  id: number;
  creatorId: number;
  name: string;
  users: PublicUser[];
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

export type newUser = {
  username: string;
  password: string;
  pseudo: string;
}

export type LoginForm = {
  username: string;
  password: string;
}