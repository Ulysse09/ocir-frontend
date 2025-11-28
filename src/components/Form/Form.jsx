import React, { useState } from "react";
// import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const[creator,setCreator] = useState("")
  const [isLoading, setIsLoading] = useState("");

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange =  (e) => {
    console.log('handling..')
    const selected = e.target.files?.[0];
    if (!selected ) {
      console.log('no file selected') 
      return
    } ; 

    setFile(selected)

    const url = URL.createObjectURL(selected);
    setPreview(url)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(!file)return  alert('Please upload File');
    
    try {
      const formData = new FormData();
      formData.append('title',title);
      formData.append('description',description);
      formData.append('category',category);
      formData.append('creator',creator);
      formData.append('file',file)
  
      for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
}   
      const res = await fetch('http://localhost:3000/api/upload',{
          method:'POST',
          body: formData
        }
      );
  
      const data = await res.json();
      console.log('Uploaded File:',data)
      toast.success('Hash :',res.body.hash)
    }
    catch(error){
      console.log('Error :',error)
      toast.error('Error:',)

    }
    
    
    

  }

   
   

  return (
    <>
      <ToastContainer />
       
        <div className=" items-center md:items-start gap-6 justify-around rounded-xl flex flex-col-reverse  md:flex-row   lg:top-[8rem] md:left-[20rem] md:top-[1rem] py-[2rem] md:pb-[10rem] w-full">

          <form className="flex flex-col w-[40vw] px-8 rounded-2xl space-y-10   ">
            <h2 className="text-gray-300  text-center lg:text-left font-nunito text-2xl font-semibold font-roboto">
              Register Your Creation
            </h2>
    
          <label class=" rounded-lg flex border-dashed outline-none hover:border-blue-400 border-2  border-gray-400 justify-between py-1">
            <span className="text-gray-400">PNG,GIF,WEBP,MP4 or MP3.Max 100mb.</span>
            <input accept="image" onChange={handleFileChange} type="file" class="hidden" />
            <span className="bg-gray-600 rounded-r-sm font-normal ">Upload File</span>

          </label>
          
            <input
              type="text"
              placeholder="Title"
              value={title}
              name=""
              id=""
              className=" rounded-lg outline-none hover:border-blue-400 border-2  border-gray-400  px-3 py-1"
              required
              onChange={(e) => setTitle(e.target.value)}
            />


            <input
              type="text"
              placeholder="Description"
              value={description}
              name=""
              id=""
              className=" rounded-lg outline-none hover:border-blue-400 border-2  border-gray-400  px-3 py-1"
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              className=" outline-none hover:border-blue-400 border-2  border-gray-400 rounded-lg px-3 py-1 "
              required
              onChange={(e) => setCategory(e.target.value)}
            />
             <input
              type="text"
              placeholder="Creator"
              value={creator}
              className=" outline-none hover:border-blue-400 border-2  border-gray-400 rounded-lg px-3 py-1 "
              required
              onChange={(e) => setCreator(e.target.value)}
            />

            <div className=" justify-center flex lg:justify-start">
              <button
                 onClick={(e) => handleSubmit(e)} 

              
                className="px-4 py-2 bg-gray-600 focus:bg-black rounded-md text-white font-semibold"
              >
                {isLoading ? "Registering..." : "Register IP"}
              </button>
            </div>
          </form>

          <div className={`${preview?'border-gray-400':'border-dashed border-2 flex justify-center items-center rounded-2xl  border-gray-400 h-40'} w-40 `}>
            {preview ? (
              <div className=" ">
                <img 
                src={preview} 
                    alt="preview" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
              </div>  
            ): <span>Preview</span>}

          </div>

          
        </div>

        

        
      
    </>
  );
};

export default Form;
