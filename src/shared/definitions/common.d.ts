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