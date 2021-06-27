import { GroupData } from "./common";

export type GeneralDashboardData = {
  userId: number;
  userUsername: string;
  userPseudo: string;
  userCreationAccountDate: string;
  groupsData: GroupData[];
}