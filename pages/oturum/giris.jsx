/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Input from '@/components/UI/Input'
import { loginSchema } from '@/schema/login'
import axios from 'axios'
import { useFormik } from 'formik'
import { getSession, signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const giris = () => {

  const { data: session } = useSession();
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
      
    } catch (err) {
      toast.error("Giriş İşlemi Başarısız!")
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && push("/profil/" + currentUser?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push, currentUser]);


  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
  useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    value: values.email,
    errorMessage: errors.email,
    touched: touched.email,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Şifre",
    value: values.password,
    errorMessage: errors.password,
    touched: touched.password,
  },
];

  return (
    <div>
        <Header/>
        <section className='min-h-[calc(100vh_-_349px)] flex items-center justify-center w-full max-md:my-16'>
            <form onSubmit={handleSubmit} className='w-[50%] px-32 max-md:w-full max-lg:px-16'>
                <h2 className='text-2xl font-bold uppercase text-primary text-center mb-8'>Giriş Yap</h2>

                <div className='flex items-center justify-center flex-col gap-4'>
                {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
                <Link href='/oturum/kayit'>
                <span className='text-left underline text-sm font-semibold hover:text-black duration-300 text-black/50 w-full cursor-pointer'>Hesap Oluştur.</span>
                </Link>
                </div>

                <button type='submit' className='button flex items-center justify-center mt-8 w-full'>Giriş Yap</button>
            </form>

            <div className='w-[50%] flex items-center justify-center h-full max-md:hidden'>
              <div>
                <Image alt='' src='/images/giris.gif' width={500} height={500}/>
              </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req});

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
  const user = res.data?.find((user) => user.email === session?.user?.email)
  if(session && user) {
      return {
        redirect: {
          destination: "/profil/" + user._id,
          permanent: false,
        },
      }
  }
  
  return {
    props: {},
  }

}

export default giris