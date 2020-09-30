import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Deputado } from "./../models/deputado";
import { LoadingController } from "@ionic/angular";
import { ApiService } from "./../services/api.service";

@Component({
  selector: "app-modal-deputado",
  templateUrl: "./modal-deputado.page.html",
  styleUrls: ["./modal-deputado.page.scss"],
})
export class ModalDeputadoPage implements OnInit {
  @Input() idDeputado: number;
  public deputado: Deputado;
  public carregando: any;
  public finish: boolean = false;

  constructor(public modal: ModalController, private api: ApiService) {}

  ngOnInit() {
    this.buscarDeputado(this.idDeputado);
    console.log(this.idDeputado);
    //// setTimeout(() => {
    // this.modal.dismiss();
    // }, 3000);
  }
  buscarDeputado(id: number) {
    this.api.getDeputadoById(id).subscribe((response) => {
      this.deputado = response.dados;
      this.finish = true;
    });
  }
  fecharModal(): void {
    this.modal.dismiss();
  }
}
