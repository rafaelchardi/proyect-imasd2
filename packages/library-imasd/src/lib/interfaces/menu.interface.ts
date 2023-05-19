export interface Menu {
    id:number;
    description: string;
    path: string;
    children?:Menu[]
  }
  