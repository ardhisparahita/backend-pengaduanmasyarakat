import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("./../db/models")

class MasyarakatController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.masyarakat.findAll()
    return res.json({
      messages: "all masyarakat",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {nik, nama, username, password, telp} = req.body

    const response = await db.masyarakat.create({
      nik,
      nama,
      username,
      password,
      telp
    })
    return res.json({
      messages: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.masyarakat.findOne({
      where: {
        id
      }
    })
    return res.json({
      messages: "get one masyarakat",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {nik, nama, username, password, telp} = req.body

    await db.masyarakat.update({
      nik,
      nama,
      username,
      password,
      telp
    }, {
      where: {
        id
      }
    })
    const data = await db.masyarakat.findOne({
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

    await db.masyarakat.destroy({
      where: {
        id
      }
    })
    return res.json({
      messages: "delete successfully!"
    })
  }
}

export default new MasyarakatController()