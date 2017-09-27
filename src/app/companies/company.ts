export class Company {   
  _id?: string;
  name: string;
  volume:number;
  totalVolume:number;
  path: string;
  children: Company[];
}