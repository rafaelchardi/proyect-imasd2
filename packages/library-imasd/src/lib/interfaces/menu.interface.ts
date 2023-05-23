import { Roles } from "../enum";

export interface Menu {
    id:number;
    label: string;
    icon?: string;
    path?: string;
    roles?:Roles[]
    items?:Menu[]
  }
    