import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientosComponent } from './mantenimientos.component';
import { ChoferesComponent } from './choferes/choferes.component';

const routes: Routes = [{ path: 'index', component: MantenimientosComponent }
,{ path: 'choferes', component: ChoferesComponent  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientosRoutingModule { }
