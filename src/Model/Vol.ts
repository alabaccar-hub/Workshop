export class Vol {
  id:number;
  destination : string;
  date : Date;
  depart : string;
  nbVoyageur : number;

  constructor(id: number, date: Date, dest : string, dep:string,nb : number) {
    this.id = id;
    this.date = date;
    this.destination = dest;
    this.depart=dep;
    this.nbVoyageur = nb;
  }
}
