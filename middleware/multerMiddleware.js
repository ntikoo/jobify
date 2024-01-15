import multer from "multer";
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads')
    },
     filename:(req,file,cb)=>{
        const fileName= file.originalname
        cb(null,fileName)
     }
})

export const upload = multer({storage})