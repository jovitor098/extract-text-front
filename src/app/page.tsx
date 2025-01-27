import Form from "@/components/form";
import getTextFromImage from "@/services/uploadImageService";
import { FormEvent } from "react";

export default function Home() {
  const handlerSubmit = async (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const text = await getTextFromImage(ev.currentTarget);
      console.log(text);
  }

  return (
      <>
          <h1>Extract texts from image</h1>
          <Form handlerSubmit={handlerSubmit} />
      </>
  );
}
