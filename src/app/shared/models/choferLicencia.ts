import { Chofer } from "./chofer";
import { Licencias } from "./licencia";

export interface LicenciaChofer {
    id: string;
    chofer: Chofer | null;
    licencia: Licencias; 
}