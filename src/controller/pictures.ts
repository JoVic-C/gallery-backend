import { RequestHandler } from 'express';
import * as pictures from '../service/pictures';
import { z } from 'zod';

export const getPictures: RequestHandler = async(req, res) => {
    const { id_user, id_gallery} = req.params;

    const items = await pictures.getAll({
        id_user: id_user,
        id_gallery: parseInt(id_gallery)
    });
    if(items) return res.json({ pictures: items});


} 

export const addPictures: RequestHandler = async (req, res) => {
    const {id_user, id_gallery} = req.params;

    const addPicturesSchema = z.object({
        title: z.string(),
        description: z.string(),
        image: z.string()
    })

    const body = addPicturesSchema.safeParse(req.body);
    if(!body.success) return res.json({error: 'Dados invalidos'});

    const newPicture = await pictures.create({
        image_title: body.data.title,
        image_description: body.data.description,
        image: body.data.image,
        id_user: id_user,
        id_gallery: parseInt(id_gallery)
    });
    if(newPicture) return res.status(201).json({ picture: newPicture});


}

export const updatePicture: RequestHandler = async(req, res) => {
    const {id, id_gallery, id_user} = req.params;

    const updatePictureSchema = z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional()
    });

    const body = updatePictureSchema.safeParse(req.body);
    if(!body.success) return res.json({ error: 'Dados invalidos'});

    const updatedPicture = await pictures.update({
        id: parseInt(id),
        id_user: id_user,
        id_gallery: parseInt(id_gallery)
    }, body.data);
    
    return res.json({ picture: updatedPicture})
}


export const deletePicture: RequestHandler = async(req, res) => {
    const {id, id_gallery, id_user} = req.params;

    const deletedPicture = await pictures.remove({
        id: parseInt(id),
        id_gallery: parseInt(id_gallery),
        id_user: id_user
    })

    if(deletedPicture) return res.json({ picture: deletedPicture})
}