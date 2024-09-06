"use client"
import { useRef, useState } from "react"
import cls from "./image-picker.module.css"
import Image from "next/image";


export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
    function handlePickClick(){
        imageInput.current.click();

    }
    function handleImageChange(event){
        const file = event.target.files[0];

        if (!file){
            setPickedImage(null);
            return;

        }

       const fileReader = new FileReader();

       fileReader.onload = () => {
        setPickedImage(fileReader.result);
       };

       fileReader.readAsDataURL(file);
    }
  return (
    <div className={cls.picker}> <label htmlFor={name}>{label}</label>
    <div className={cls.controls}>
        <div className={cls.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill/>}
        </div>
        <input  ref={imageInput} className={cls.input} type="file" id={name} accept="image/png, image/jpeg" name={name} onChange={handleImageChange} required/>
        <button className={cls.button} type="button" onClick={handlePickClick}>
            Pick anImage
        </button>
    </div>
    </div>
  )
}
