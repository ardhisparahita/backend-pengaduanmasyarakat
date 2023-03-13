import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("./../db/models")

class ComplaintController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.response.findAll()
    return res.json({
      messages: "all response",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {id_tanggapan, id_pengaduan, tgl_pengaduan, tanggapan, id_petugas} = req.body

    const response = await db.response.create({
     id_tanggapan,
     id_pengaduan,
     tgl_pengaduan,
     tanggapan,
     id_petugas
    })
    return res.json({
      messages: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.response.findOne({
      where: {
        id
      }
    })
    return res.json({
      messages: "get one response",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {id_tanggapan, id_pengaduan, tgl_pengaduan, tanggapan, id_petugas} = req.body

    await db.response.update({
     id_tanggapan,
     id_pengaduan,
     tgl_pengaduan,
     tanggapan,
     id_petugas
    }, {
      where: {
        id
      }
    })
    const data = await db.response.findOne({
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

    await db.response.destroy({
      where: {
        id
      }
    })
    return res.json({
      messages: "delete successfully!"
    })
  }
}

export default new ComplaintController()