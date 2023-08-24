import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LicenciasService } from 'src/app/shared/services/licencias.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.scss'],
})
export class LicenciasComponent {
  dataSource = new MatTableDataSource();

  mostrarLicencias: string[] = ['id', 'nombre', 'seleccionar'];
  


  constructor(
    private srvLicencias: LicenciasService,
    private mensajeria: ToastrService
  ) {}
  

  ngOnInit() {
    this.srvLicencias.getAll().subscribe(
      (datos) => {
        this.dataSource.data = datos;
      },
      (errors) => {
        this.mensajeria.error(`Lo siento se produjo un error. ${errors}`);
      }
    );
  }
}
