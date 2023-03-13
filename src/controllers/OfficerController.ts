import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("./../db/models")

class OfficerController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.officer.findAll()
    return res.json({
      messages: "all officer",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {id_petugas, nama_petugas, username, password, telp, level} = req.body

    const response = await db.officer.create({
      id_petugas,
      nama_petugas,
      username,
      password,
      telp,
      level
    })
    return res.json({
      messages: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.officer.findOne({
      where: {
        id
      }
    })
    return res.json({
      messages: "get one officer",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {id_petugas, nama_petugas, username, password, telp, level} = req.body

    await db.officer.update({
      id_petugas,
      nama_petugas,
      username,
      password,
      telp,
      level
    }, {
      where: {
        id
      }
    })
    const data = await db.officer.findOne({
      where: {
        id
      }
    })
    return res.json({
      messages: "update successfully!",
      data
    })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    await db.officer.destroy({
      where: {
        id
      }
    })
    return res.json({
      messages: "delete successfully!"
    })
  }
}

export default new OfficerController()