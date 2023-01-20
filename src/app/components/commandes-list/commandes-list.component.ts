import {Component, OnInit} from '@angular/core';
import {CommandesService} from "../../services/commandes.service";
import {Commandes} from "../../interfaces/commandes";

@Component({
  selector: 'app-commandes-list',
  templateUrl: './commandes-list.component.html',
  styleUrls: ['./commandes-list.component.scss']
})
export class CommandesListComponent implements OnInit{

  list_commandes!: Commandes[];

  constructor(private cmdes: CommandesService) {}

  ngOnInit(): void {
    this.loadCommande();
  }

  displayBasic = false

  loadCommande(){
    this.cmdes.getAllCommandes().subscribe({
      next: (response:Commandes[]) =>{
        this.list_commandes = response;
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }

  showBasicDialog(){
    this.displayBasic = !this.displayBasic
  }

}
