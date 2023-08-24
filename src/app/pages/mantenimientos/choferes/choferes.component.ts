import { Component, Inject, OnInit } from '@angular/core';
import { ChoferForm } from 'src/app/shared/formsModels/choferesForms';
import { LicenciasComponent } from './licencias/licencias.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LicenciaChofer } from 'src/app/shared/models/choferLicencia';
import { ChoferesService } from 'src/app/shared/services/choferes.service';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.scss'],
})
export class ChoferesComponent implements OnInit {
  Licencias: LicenciaChofer[] = [];
 

  constructor(
    public choferForm: ChoferForm,
    public dialog: MatDialog,
    private srvChoferes: ChoferesService,
    private mensajeria: ToastrService
  ) {}

  ngOnInit() {}

  private validar(): boolean {
    return this.Licencias.length > 0;
  }

  abrirDialog(): void {
    let dialogOpen;
    dialogOpen = this.dialog.open(LicenciasComponent, {
      width: '470px',
      height: '525px',
    });

    dialogOpen.afterClosed().subscribe((opcion: any) => {
      if (opcion && opcion.id && !this.exist(opcion.id)) {
        const licenciaChofer: LicenciaChofer = {
          id: '',
          chofer: null,
          licencia: opcion,
        };
        this.Licencias.push(licenciaChofer);
      }
    });
  }

  private limpiar() {
    this.Licencias = [];
    this.choferForm.baseForm.reset();
  }

  private exist(id: string): boolean {
    return this.Licencias.some((licencia) => licencia.licencia.id === id);
  }
  

  private insert() {
    this.srvChoferes.guardar(this.choferForm.baseForm.value).subscribe(
      () => {
        this.limpiar();
        this.mensajeria.success('Chofer creado exitosamente');
      },
      (error: any) => {
        this.mensajeria.error('Error al guardar');
      }
    );
  }

  guardarChofer() {
    if (this.validar()) {
      this.choferForm.baseForm.patchValue({
        licencias: this.Licencias.map((lic) => ({ id: lic.licencia.id })),
      });

      if (this.choferForm.baseForm.valid) {
        this.insert();
       
      } else {
        this.mensajeria.error('Error al guardar el chofer');
      }
    } else {
      this.mensajeria.error('Error al guardar la licencia');
    }
  }


  eliminar(licencia: LicenciaChofer) {
    this.Licencias = this.Licencias.filter((lic) => lic !== licencia);
  }


}


