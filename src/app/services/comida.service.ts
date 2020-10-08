import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {
    //
    //Or to get A key /value pair
    // storage.get("comidas").then((val) => {
    //  console.log("Comidass", val);
    //});
  }
  public getAll() {
    return this.storage.get("comidas").then((comidas) => {
      return Promise.resolve(comidas);
    });
  }

  public salvarComida(comida) {
    this.getAll().then((comidas) => {
      console.log(comidas);
      comidas.push(comida);
      this.storage.set("comidas", comidas);
      // console.log(comidas, "comida");
    });
  }
}
