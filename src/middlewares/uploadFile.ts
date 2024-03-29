import multer, { diskStorage } from "multer";

export const storage = multer.diskStorage({
    destination: './tmp',
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname )
    },
})

export const image = multer({
  /// dest: './tmp',
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        cb(null, allowed.includes( file.mimetype))
    },      
}
)
