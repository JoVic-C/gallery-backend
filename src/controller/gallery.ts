import { RequestHandler } from 'express';
import * as gallery from '../service/gallery';
import { z } from 'zod';

export const userGalleries: RequestHandler = async(req, res) => {
    const {id} = req.params;

    const userItem = await gallery.getAll(id)
    if(userItem) {
        return res.json({userGalleries: userItem})
    } else {
        return res.json({error: 'usuario não existe'})
    }
}

export const getGallery: RequestHandler = async(req, res) =>{
    const {id, id_user} = req.params

    const item = await gallery.getOne({
        id: parseInt(id),
        id_user: id_user
    })

    if(item) {
        return res.json({ userGallery: item})
    } else{ 
        return res.json({error: 'usuario não existe'})
    }
}

export const addGallery: RequestHandler = async(req, res) => {
    const {id_user} = req.params

    const addGallerySchema = z.object({
        title: z.string(),
        description: z.string()
    });

    const body = addGallerySchema.safeParse(req.body)
    if(!body.success) return res.json({ error: 'Dados inválidos'});

    const newGallery = await gallery.create({
        title: body.data.title,
        description: body.data.description,
        id_user: id_user
    });

    if(newGallery) {
        return res.status(201).json({ gallery: newGallery})
    } else{
        res.json({error: 'Ocorreu um erro'})
    }
}

export const updateGallery: RequestHandler = async(req, res) => {
    const {id, id_user} = req.params;

    const updateGallerySchema = z.object({
        title: z.string().optional(),
        description: z.string().optional()
    });

    const body = updateGallerySchema.safeParse(req.body)
    if(!body.success) return res.json({ error: 'Dados inválidos'});

    const updateGallery = await gallery.update({
        id: parseInt(id),
        id_user: id_user
    }, body.data);

    if(updateGallery) return res.status(201).json({ galery: updateGallery})
}

export const deleteGallery: RequestHandler = async(req, res) => {
    const {id, id_user} = req.params;

    const deleteGallery = await gallery.remove({
        id: parseInt(id),
        id_user: id_user
    });

    if(deleteGallery) return res.json({ gallery: deleteGallery})
}