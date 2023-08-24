import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoferesComponent } from './choferes/choferes.component';
import { LicenciasComponent } from './choferes/licencias/licencias.component';


@NgModule({
  declarations: [
    MantenimientosComponent,
    ChoferesComponent,
    LicenciasComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MantenimientosModule { }
