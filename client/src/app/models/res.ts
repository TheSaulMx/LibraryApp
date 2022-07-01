import { Book } from "./book";

export interface Respuesta<Book>{
  sucess: boolean;
  mensajeExito: string;
  mensajeError: string;
  entity: Book[];
}
