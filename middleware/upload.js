const multer=require("multer");
const path=require("path");

const fileFilter=(req,file,cb)=>{
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "application/vnd.ms-excel", // .xls
        "text/markdown", // .md
        "text/plain", // .txt
    ];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true); 
    } else{
        cb(new Error("Only PDF and image files are allowed",false));  
    }
};

const storage=multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        const uniqueName= Date.now()+"-"+file.originalname;
        cb(null,uniqueName);
    },
});

const upload=multer({
    storage,
    fileFilter,
    limits:{fileSize:5*1024*1024},
});

module.exports=upload;
