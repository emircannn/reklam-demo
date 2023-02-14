import formidable from 'formidable'
import {join, resolve} from 'path'
export const config = {
    api: {
        bodyParser: false
    }
}

export default async function Upload(req, res, next) {
    const optinos = {
        uploadDir: join(resolve(), '/public/uploads'),
        keepExtensions: true,
        maxFileSize: 100 * 1024 * 1024, // 100mb
        maxFieldsSize: 100 * 1024* 1024, // 100mb
        filename: function(name, ext, part, form) {
            return name + ext
        }
    }
    const form = new formidable.IncomingForm(optinos)
    form.parse(req, async function(err, fields, files) {
        if(err) {
            console.log(err)
        }
        console.log(fields)
    })
}