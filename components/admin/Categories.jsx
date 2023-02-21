import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Categories = () => {

  const {push} = useRouter();
  const [ImageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("")
  const [categories, setCategories] = useState([])

  const getImage = async (e) => {
    setImage(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setImageUrl(url);
  }


  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, [setCategories]);

  const sendServer = async () => {
    const body = new FormData()
    body.append('file', image)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`,body)
  }

  const handleCreate = async () => {
    try {     
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {title: title, image: image.name, subtitle: []});
      setCategories([...categories, res?.data]);
      setTitle("")
      setImageUrl('')
      toast.success('Kategori Başarı İle Oluşturuldu!') 
      sendServer()
    } catch (err) {
      toast.error("Kategori Oluşturma İşlemi Başarısız!");
        console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
        if(confirm("Bu Kategoriyi Silmek İstediğinize Emin Misiniz?")){
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
            setCategories(categories.filter((cat) => cat._id !== id));
            toast.success('Kategori Başarı İle Silindi!')
        }
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <main className='md:p-8 lg:mt-0 mt-5 max-md:px-4 flex-1 relative'>
      <h2 className='font-bold text-primary text-2xl border-b-2 border-primary'>Kategoriler</h2>
      <div className='mt-5'>

      <div className='flex items-center flex-col justify-center gap-4'>
      <label className='flex flex-col items-center justify-center gap-4'>
      <Image alt='' className='w-[200px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl ? ImageUrl : '/images/upload.jpg'} />
      <input className='hidden' type='file' id='image' name='image' onChange={getImage}/>
      <span className='button'>Resim Ekle</span>
      </label>

      <div className='w-full flex flex-col gap-4'>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Kategori İsmi...' className="h-12 border-2 border-primary outline-none px-4 peer w-full"/>
      <button type='button' onClick={() => handleCreate()} className='button'>Ekle</button>
      </div>

      </div>

      <div className='mt-10 w-full grid-cols-2 grid gap-4 max-md:grid-cols-1'>
        
        {categories.length > 0 ? categories.map((category) =>(
          <div key={category._id} className='bg-slate-200 rounded-md overflow-hidden shadow-xl flex items-center justify-between w-full gap-8 group'>
          <div className='w-1/3 h-[100px] relative overflow-hidden'>
          <Image alt='' className='w-full h-full object-cover group-hover:scale-110 duration-300' src={`/uploads/${category.image}`} width={500} height={500}/>
          <span onClick={() => push(`/abika/profil/altkategori/${category._id}`)} className='absolute top-0 w-full h-full bg-black/70 flex items-center justify-center z-20 text-white font-semibold opacity-0 hover:opacity-100 
          duration-300 cursor-pointer'>Alt Kategorileri Düzenle</span>
          </div>
          <h3 className='font-medium text-xl text-primary'>{category.title}</h3>

          <span onClick={() => handleDelete(category._id)} className='mr-8 text-primary hover:text-black cursor-pointer duration-300'><BsFillTrashFill size={20}/></span>
        </div>
        )) : <h2 className=' font-bold text-primary text-xl'>Henüz Bir Kategori Eklemediniz</h2>}
      </div>


      </div>
    </main>
  )
  };

export default Categories