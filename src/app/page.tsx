"use client";

import Form from "@/components/form";
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
            <Form handlerSubmit={handlerSubmit} />
        </>
    );
}
