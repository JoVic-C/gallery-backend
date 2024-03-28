import { Router } from "express";
import * as login from '../controller/login'
import * as gallery from '../controller/gallery'
import * as picture from '../controller/pictures'
import * as auth from '../middlewares/auth'
import * as upload from '../middlewares/uploadFile'


const router = Router();

router.post('/singin', login.singIn)
router.post('/singup', login.singUp)


router.get('/galleries/:id_user', auth.Private,gallery.userGalleries)

router.get('/galleries/:id_user/profile/:id', auth.Private, gallery.getGallery)

router.post('/galleries/:id_user/profile', auth.Private, gallery.addGallery)

router.put('/galleries/:id_user/profile/:id', auth.Private, gallery.updateGallery)

router.delete('/galleries/:id_user/profile/:id', auth.Private, gallery.deleteGallery)


router.get('/galleries/:id_user/profile/:id_gallery/pictures', auth.Private, picture.getPictures)

router.post('/galleries/:id_user/profile/:id_gallery/pictures', auth.Private, upload.image.single('file'), picture.addPictures)

router.put('/galleries/:id_user/profile/:id_gallery/pictures/:id', auth.Private, picture.updatePicture)

router.delete('/galleries/:id_user/profile/:id_gallery/pictures/:id', auth.Private, picture.deletePicture)

export default router