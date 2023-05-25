import { BoadcastMenssage } from "../enum";

export interface BroadcastMessage {
    type: BoadcastMenssage;
    payload: any;
  }