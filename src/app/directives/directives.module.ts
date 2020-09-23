import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextoAzulDirective } from "../directives/texto-azul.directive";

@NgModule({
  declarations: [TextoAzulDirective],
  imports: [CommonModule],
  exports: [TextoAzulDirective],
})
export class DirectivesModule {}
