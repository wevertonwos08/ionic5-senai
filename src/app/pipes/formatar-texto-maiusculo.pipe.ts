import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatarTextoMaiusculo",
})
export class FormatarTextoMaiusculoPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
