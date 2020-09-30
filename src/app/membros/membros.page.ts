import { ModalDeputadoPage } from "./../modal-deputado/modal-deputado.page";
import { Membro } from "./../models/membro";
import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {} from "../services/api.service";
import { ModalController } from "@ionic/angular";
import { Subscriber } from "rxjs";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  membros: Array<Membro> = [];
  idPartido: number;
  public loading: boolean = false;
  constructor(
    public router: ActivatedRoute,
    private apiserv: ApiService,
    public modal: ModalController
  ) {}

  async ngOnInit() {
    // console.log(this.router.snapshot.params.id);
    this.loading = true;
    this.idPartido = this.router.snapshot.params.id;
    await this.buscarMembrosDoPratido(this.idPartido);
  }
  public buscarMembrosDoPratido(idPartido: number): void {
    this.apiserv.getMembros(this.idPartido).subscribe((response) => {
      this.membros = response.dados;
    });
    this.loading = false;
  }
  async abrirModal(idDeputado: number) {
    const modal = await this.modal.create({
      component: ModalDeputadoPage,

      componentProps: {
        idDeputado,
      },
    });
    return await modal.present();
  }
}
