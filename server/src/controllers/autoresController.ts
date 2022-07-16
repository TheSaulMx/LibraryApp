import { Request, response, Response } from "express";
import { Autor } from "../models/autor";
import { Respuesta } from "../models/res";
import database from "../database";

class autoresController {

    public async createAutor(req: Request, res: Response) {

        try {
            const autorModel = req.body as Autor;

            await database.query(`call SP_InsertAutor('${autorModel.autor_name}', '${autorModel.born_date}', '${autorModel.photo}', '${autorModel.about}')`);

            const autorResp: Autor = {
                id_autor: 0,
                autor_name: autorModel.autor_name,
                born_date: autorModel.born_date,
                photo: autorModel.photo,
                about: autorModel.about
            }

            const resp: Respuesta<Autor> = {
                sucess: true,
                mensajeExito: "¡Autor agregado!",
                mensajeError: "N/A",
                entity: autorResp
            }
                res.send(resp);
        } catch (error) {
            const resp: Respuesta<Autor[]> = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "Ocurrio un error al agregar el Autor",
                entity: []
            }
                res.send(resp);
        }

    }

    public async viewAutores(req: Request, res: Response){

        try {
            
            const autorautor = await database.query(`SELECT * FROM Autores`);
            let autor = autorautor as Autor[]

            const response: Respuesta<Autor[]> = {
                sucess: true,
                mensajeExito: "autora de Autores",
                mensajeError: "N/A",
                entity: autor
            }
                res.send(response)
        } catch (error) {
            const response: Respuesta<Autor[]> = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "can't get api/autores",
                entity: []
            }
                res.send(response);
        }

    }

    public async viewAutor(req: Request, res: Response) {

        try {
            const { autor_name } = req.params;

            const autor = await database.query(`call SP_SelectAutor('${autor_name}')`);

            res.send(autor);
        }catch {
            
        }

    }

    public async updateAutor() {

    }

    public async deleteAutor(req: Request, res: Response) {

        try {
            const autorModel = req.body as Autor;        

            const delAutor = await database.query(`call SP_DeleteAutor('${autorModel.autor_name}')`);
        
            const response: Respuesta<Autor> = {
                sucess: true,
                mensajeExito: "Autor obtenido",
                mensajeError: "N/A",
                entity: delAutor
            }
                res.send(response);
        } catch (error) {
            const response: Respuesta<Autor[]> = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "No se eliminó el autor",
                entity: []
            }
                res.send(response);
        }
    }

}
const AutoresController = new autoresController();
export default AutoresController;