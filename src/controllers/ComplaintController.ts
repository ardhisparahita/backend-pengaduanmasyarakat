import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("./../db/models")

class ComplaintController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.complaint.findAll()
    return res.json({
      messages: "all complaint",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {id_pengaduan, tgl_pengaduan, nik, isi_laporan, foto, status} = req.body

    const response = await db.complaint.create({
      id_pengaduan,
      tgl_pengaduan,
      nik,
      isi_laporan,
      foto,
      status
    })
    return res.json({
      messages: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.complaint.findOne({
      where: {
        id
      }
    })
    return res.json({
      messages: "get one complaint",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {id_pengaduan, tgl_pengaduan, nik, isi_laporan, foto, status} = req.body

    await db.complaint.update({
      id_pengaduan,
      tgl_pengaduan,
      nik,
      isi_laporan,
      foto,
      status
    }, {
      where: {
        id
      }
    })
    const data = await db.complaint.findOne({
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

    await db.complaint.destroy({
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