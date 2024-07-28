import {Candidato} from "./Candidato";
import {CandidatoLista} from "./CandidatoLista";
import {Lista} from "./Lista";

export class Seggio {
  id: string;
  name: string;
  numseggio: number;
  citta: string;
  votantiM: number;
  votantiF: number;
  votatoM: number;
  votatoF: number;
  nulle: number;
  bianche: number;
  contestate: number;
  candidati: Array<Candidato>;
  candidatiLista: Array<CandidatoLista>;
  liste: Array<Lista>
}
