/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Input from '@/components/UI/Input'
import { registerSchema } from '@/schema/register'
import axios from 'axios'
import { useFormik } from 'formik'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

const kayit = () => {

  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,values);
      if (res.status === 200) {
        toast.success("Kayıt İşlemi Başarılı!");
        push("/oturum/giris");
      }
    }
  catch (err) {
    toast.error(err.response.data.message)
      console.log(err);
  }
  actions.resetForm();
};

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    onSubmit,
    validationSchema: registerSchema
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Ad-Soyad",
            value: values.name,
            errorMessage: errors.name,
            touched: touched.name
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Şifre",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Şifre Doğrulama",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        },
    ]

  return (
    <React.Fragment>
      <Head>
      <title>Kayıt Ol</title>
      </Head>
      <Header/>
    <section className='min-h-[calc(100vh_-_349px)] flex items-center justify-center w-full max-md:my-16'>
        <form onSubmit={handleSubmit} className='w-[50%] px-32 max-md:w-full max-lg:px-16'>
            <h2 className='text-2xl font-bold uppercase text-primary text-center mb-8'>Kayıt Ol</h2>

            <div className='flex items-center justify-center flex-col gap-4'>
            {inputs.map((input) => (
                    <Input key={input.id}
                    {...input}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                ))}
            <Link href='/oturum/giris'>
            <span className='text-left underline text-sm font-semibold hover:text-black duration-300 text-black/50 w-full cursor-pointer'>Hesabım Zaten Var.</span>
            </Link>
            </div>

            <button type='submit' className='button flex items-center justify-center mt-8 w-full'>Kayıt Ol</button>
        </form>

        <div className='w-[50%] flex items-center justify-center h-full max-md:hidden'>
              <div>
                <Image alt='' src='/images/kayit.gif' width={500} height={500}/>
              </div>
            </div>
    </section>
    <Footer/></React.Fragment>
  )
}

export default kayit