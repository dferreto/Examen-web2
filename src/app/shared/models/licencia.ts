import { LicenciaChofer } from "./choferLicencia";

export interface Licencias {
  id: string;
  nombre: string;
  estado: boolean;
  choferes: LicenciaChofer[];
}
