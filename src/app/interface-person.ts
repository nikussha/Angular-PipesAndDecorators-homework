export interface person {
  firstname: string;
  lastname: string;
  about: string;
  birthdate: string;
  status: status;
}

export enum status {
  Active = 'active',
  Inactive = 'inactive',
  Deleted = 'deleted',
}
