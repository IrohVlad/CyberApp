import ErrorApi from "../errorApi/errorApi.js";

export default function (err, req, res, next){
    if (err instanceof ErrorApi){
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Неизвестная ошибка'});
}