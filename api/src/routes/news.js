const { News } = require('../db');
const express = require('express');
const { Op } = require('sequelize');
const router = express();

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
    console.log(req.params)
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
    const { noticia, titulo, area, descripcion, imagen, autor, destacar } = req.body;
    try {
        try {
            const newNoticia = await News.create({
                id: new Date().getTime(),
                noticia,
                titulo,
                area,
                descripcion,
                imagen,
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
    const { id, noticia, titulo, area, descripcion, imagen, autor, destacar } = req.body.info
    console.log(req.body.info)
    try {
        await News.update({
            noticia,
            titulo,
            area,
            descripcion,
            imagen,
            autor,
            destacar
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

module.exports = router;