const { News } = require('../db');
const express = require('express');
const router = express();
const multer = require('multer')
const FTPStorage = require('multer-ftp')
const FTP = require('ftp');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const {
    HOST, USER, PASSWORD,
} = process.env;

const config = {
    host: HOST,
    port: '21',
    user: USER,
    password: PASSWORD,
    secure: false
}


const areas = ['Mantenimiento', 'Recursos Humanos', 'Tecnología', 'Gerencia', 'Nueva área']

router.get("/", async (req, res) => {
    try {
        await News.findAll({
            where: {
                destacar: false
            }
        })
            .then(noticia => res.status(200).send(noticia))
    } catch (e) {
        res.send(e)
    }
})

router.get("/getById/:id", async (req, res) => {
    const { id } = req.params
    try {
        await News.findOne({
            where: {
                id
            }
        })
            .then(noticia => res.status(200).send(noticia))
    } catch (e) {
        res.send(e)
    }
})

router.get("/getAll", async (req, res) => {
    try {
        await News.findAll()
            .then(noticia => res.status(200).send(noticia))
    } catch (e) {
        res.send(e)
    }
})

router.get('/areas', async (req, res) => {
    res.status(200).send(areas)
})

router.post("/newPost", async (req, res) => {
    const { noticia, titulo, area, descripcion, video, imagen, autor, destacar } = req.body;
    try {
        try {
            const newNoticia = await News.create({
                id: new Date().getTime(),
                noticia,
                titulo,
                area,
                descripcion,
                imagen,
                video,
                autor,
                destacar
            })
                .then(res.status(200).send({ msg: 'created', newNoticia }))
        } catch (e) {
            res.send({ msg: e })
        }
    } catch (e) {
        res.send({ msg: e })
    }
})

router.get("/getBannerNews", async (req, res) => {
    try {
        await News.findAll({
            where: {
                destacar: true
            }
        })
            .then(banner => {

                let resultado = []
                let pack = []
                while (banner.length >= 3) {
                    while (pack.length < 3) {
                        pack.push(banner.shift())
                    }
                    resultado.push(pack)
                    pack = []
                }
                const respuesta = { res: resultado, sobra: banner }
                res.status(200).send(respuesta)
            })
    } catch (e) {
        res.send(e)
    }
})

router.post("/deleteNew", async (req, res) => {
    const { id } = req.body
    try {
        await News.destroy({
            where: {
                id: id
            }
        })
    } catch (e) {
        res.send(e)
    }
})

router.put('/updateNew', async (req, res) => {
    const { id, noticia, titulo, area, descripcion, imagen, video, autor, destacar } = req.body.info
    try {
        await News.update({
            noticia,
            titulo,
            area,
            descripcion,
            imagen,
            autor,
            destacar,
            video
        },
            {
                where: {
                    id: id
                }
            })
            .then(r => res.json(r))
    } catch (e) {
        res.send(e)
    }
})

const upload = multer({
    storage: new FTPStorage({
        basepath: `image_uploads/`,
        // connection: new FTP().connect(config),
        ftp: config,
        destination: function (req, file, options, cb) {
            const { originalname } = file;
            const ext = originalname.split(".").pop()
            const path = `public_html/image_uploads/${uuidv4()}.${ext}`;
            fs.mkdirSync(path, { recursive: true });
            cb(null, path)

        }
    })
}).array('imagen')

router.post('/uploadImages', upload, async (req, res) => {
    const files = req.files
    var dir = []
    files.forEach(el => dir.push(`http://c2410346.ferozo.com/image_uploads/${el.path.split("/").pop()}`))
    res.status(200).json({ dir }).end()
})

module.exports = router;