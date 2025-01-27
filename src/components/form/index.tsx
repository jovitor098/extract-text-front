import { FormEvent } from "react";

interface props {
    handlerSubmit: (ev: FormEvent<HTMLFormElement>) => void
}

export default function Form({ handlerSubmit }: props){
 return(
    <form onSubmit={handlerSubmit}>
        <label htmlFor="upload_image">Upload your image</label>
        <input type="file" name="upload_image" id="upload_image" />
        <button type="submit">Extract</button>
    </form>
 )
}