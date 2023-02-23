import {Stagiaire} from "./stagiaire";

export interface Sortie {
  id: number;
  nom: string;
  debut: Date;
  duree: number;
  limiteInscription: Date;
  participantsMax: number;
  informations: string;
  organisateur: Stagiaire;
  partipants: Stagiaire[];
}
