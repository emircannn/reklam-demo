import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const fileName = req.query.fileName; // İndirilecek dosyanın adı, URL sorgu parametresinden alınır
  const filePath = path.join(process.cwd(), 'public/orders', fileName); // İndirilecek dosyanın yolu
  const fileContents = fs.readFileSync(filePath); // Dosya içeriğini okuyun
  const fileType = getFileType(fileName); // Dosya türünü belirleyin
  const contentDisposition = `attachment; filename=${fileName}`; // İndirilen dosya adını belirleme
  res.setHeader('Content-Type', fileType); // Yanıt başlığı belirleme
  res.setHeader('Content-Disposition', contentDisposition); // Yanıt başlığı belirleme
  res.send(fileContents); // Dosyayı yanıt olarak gönderme
}

function getFileType(fileName) {
  const extension = fileName.split('.').pop();
  switch (extension) {
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'pdf':
      return 'application/pdf';
    case 'zip':
      return 'application/zip';
    case 'ps':
      return 'application/postscript';
    case 'tiff':
      return 'image/tiff';
    default:
      return 'application/octet-stream';
  }
}