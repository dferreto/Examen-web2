import { LicenciaChofer } from "./choferLicencia";

export interface Chofer {
  cedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNac: Date;
  estado: boolean;
  licencias: LicenciaChofer[];
}
