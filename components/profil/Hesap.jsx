import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "../UI/Input";
import { accountSchema } from "@/schema/account";

const Hesap = ({user}) => {

  const onSubmit = async (values) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
        toast.success("Güncelleme İşlemi Başarılı!")
    } catch (err) {
        console.log(err);
        toast.danger("Güncelleme İşlemi Başarısız!")
    }
};
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            name: user?.name,
            email: user?.email,
            password: user?.password,
            confirmPassword: user?.confirmPassword,
          },
          onSubmit,
          validationSchema: accountSchema,
        });
    
      const inputs= [
        {
          id: 1,
            name: "name",
            type: "text",
            placeholder: "İsim-Soyisim",
            value: values.name,
            errorMessage: errors.name,
            touched: touched.name,
        },
        {
          id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
          id: 3,
            name: "password",
            type: "password",
            placeholder: "Şifre",
            value: values.phone,
            errorMessage: errors.phone,
            touched: touched.phone,
        },
        {
          id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Şifre Tekrarı",
            value: values.address,
            errorMessage: errors.address,
            touched: touched.address,
        },
      ]

  return (
    <form className='lg:p-8 lg:mt-0 mt-5 max-md:my-6 max-md:px-4  flex-1' onSubmit={handleSubmit}>
        <h3 className="font-dancing text-2xl uppercase font-bold text-primary select-none">Hesap Ayarları</h3>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {inputs.map((input) => (
                <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
            ))}
        </div>
        <button type='submit' className="button hover:!bg-dark hover:!text-white mt-4">Güncelle</button>
    </form>
  )
}

export default Hesap