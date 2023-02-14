import * as Yup from 'yup';

export const registerSchema = Yup.object({
        email: Yup.string().required("Bu Alan Boş Bırakılamaz!")
        .email("Geçersiz Email Adresi!"),
        password: Yup.string().required("Bu Alan Boş Bırakılamaz!")
        .min(8, "Şifre 8 karakterden az olamaz!")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.-_%$#?&!@])[A-Za-z\d.-_%$#?&!@]{8,}$/,
        "En az bir tane büyük, küçük harf ve özel karakter olmak zorundadır!"),
        name: Yup.string().required("Bu Alan Boş Bırakılamaz!").
        min(3, "Ad Soyad Alanı 3 karakterden az olamaz!"),
        confirmPassword: Yup.string().required("Bu Alan Boş Bırakılamaz!")
        .oneOf([Yup.ref('password'), null], "Şifreniz eşleşmiyor!")
      })
