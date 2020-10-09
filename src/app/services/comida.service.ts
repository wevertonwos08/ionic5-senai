import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {
    //this.removeAll();
    //
    //Or to get A key /value pair
    // storage.get("comidas").then((val) => {
    //  console.log("Comidass", val);
    //});
  }
  public async getAll() {
    //return this.storage.get("comidas").then((comidas) => {
    //return Promise.resolve(comidas);
    // });
    let comidas = await this.storage.get("comidas");
    comidas = JSON.parse(comidas);
    return comidas;
  }

  public async salvarComida(comida) {
    //this.getAll().then((comidas) => {
    // console.log(comidas);
    //  comidas.push(comida);
    //  this.storage.set("comidas", comidas);
    // console.log(comidas, "comida");
    // });
    // let comidas = await this.getAll();
    // if (!comidas) {
    //   comidas = [];
    //}
    // comidas.push(comida);
    // this.storage.set("comidas", JSON.stringify(comidas));

    await this.save(comida);
  }

  public async save(comida) {
    let comidas = await this.getAll();
    if (!comidas) {
      comidas = [];
    }

    comidas.push(comida);
    this.storage.set("comidas", JSON.stringify(comidas));
  }

  public async removeAll() {
    await this.storage.remove("comidas");
  }
  public async remover(id: number) {
    let comidas = await this.getAll();
    comidas.splice(id, 1);
    await this.storage.set("comidas", JSON.stringify(comidas));
    console.log(comidas);
  }
}
