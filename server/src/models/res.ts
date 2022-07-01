export interface Respuesta<T>{
    sucess: boolean;
    mensajeExito: string;
    mensajeError: string;
    entity: T;
}