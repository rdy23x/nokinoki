export interface Commandes {
  _id?: any;
  idclient:string;
  nom_receiver:string;
  tel_receiver:string;
  addr_receiver:string;
  idvehicule: string;
  descriptif: string;
  status?: number;
  num_commande?: string;
  created?: any;
  updated?: any;
}

export interface FilterCommandes {
  idclient?:string;
  idvehicule?: string;
  status?: number;
  start?: any;
  end?: any;
}
