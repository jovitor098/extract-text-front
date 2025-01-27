export default function Form(){
 return(
    <form>
        <label htmlFor="upload_image">Upload your image</label>
        <input type="file" name="upload_image" id="upload_image" />
        <button type="submit">Extract</button>
    </form>
 )
}