import { ComidaService } from "./../services/comida.service";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-comida",
  templateUrl: "./modal-comida.page.html",
  styleUrls: ["./modal-comida.page.scss"],
})
export class ModalComidaPage implements OnInit {
  public form: FormGroup;
  constructor(
    public modal: ModalController,
    public formBuilder: FormBuilder,
    public comida: ComidaService
  ) {
    this.form = formBuilder.group({
      nome: [""],
      tipo: [""],
      avaliacao: [""],
      horaEntrega: [""],
      dataEntrega: [""],
      isPimenta: [""],
    });
  }

  ngOnInit() {}
  public fecharModal(): void {
    this.modal.dismiss();
  }
  async submitForm() {
    //console.log(this.form.value);
    await this.comida.salvarComida(this.form.value);
  }
}
