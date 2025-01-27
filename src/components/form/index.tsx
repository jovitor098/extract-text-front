'use client';

import getTextFromImage from "@/services/uploadImageService"
import { FormEvent } from "react"

export default function Form(){
    const handlerSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const text = await getTextFromImage(ev.currentTarget);
        console.log(text);
    }
 return(
    <form onSubmit={handlerSubmit}>
        <label htmlFor="upload_image">Upload your image</label>
        <input type="file" name="upload_image" id="upload_image" />
        <button type="submit">Extract</button>
    </form>
 )
}