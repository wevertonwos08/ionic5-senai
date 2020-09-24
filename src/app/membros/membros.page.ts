import { Membro } from "./../models/membro";
import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {} from "../services/api.service";
import { Subscriber } from "rxjs";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  membros: Array<Membro>;
  idPartido: number;
  constructor(public router: ActivatedRoute, private apiserv: ApiService) {}

  ngOnInit() {
    // console.log(this.router.snapshot.params.id);
    this.idPartido = this.router.snapshot.params.id;
    this.buscarMembrosDoPratido(this.idPartido);
  }
  public buscarMembrosDoPratido(idPartido: number): void {
    this.apiserv.getMembros(this.idPartido).subscribe((response) => {
      this.membros = response.dados;
    });
  }
}
