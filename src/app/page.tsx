"use client";

import FormImage from "@/components/form";
import TextResult from "@/components/textResult";
import getTextFromImage from "@/services/uploadImageService";
import { FormEvent, useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    const handlerSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const textImage = await getTextFromImage(ev.currentTarget);
        setText(textImage);
    };

    return (
        <>
            <h1>Extract texts from image</h1>
            <FormImage handlerSubmit={handlerSubmit} />
            {text.length > 0 ? <TextResult text={text} /> : null}
        </>
    );
}
