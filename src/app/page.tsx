"use client";

import FormImage from "@/components/form";
import TextResult from "@/components/textResult";
import getTextFromImage from "@/services/uploadImageService";
import { FormEvent, useState } from "react";
import styles from "./page.module.scss";
import { Container, Spinner } from "reactstrap";

export default function Home() {
    const [text, setText] = useState("");
    const [loadingText, setLoadingText] = useState(false);
    const handlerSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setText("");
        setLoadingText(true);
        const textImage = await getTextFromImage(ev.currentTarget);
        setLoadingText(false);
        setText(textImage);
    };

    return (
        <>
            <h1 className={styles.title}>Extract texts from image</h1>
            <Container className={styles.container}>
                <FormImage handlerSubmit={handlerSubmit} />
                {text.length > 0 ? (
                    <TextResult text={text} />
                ) : loadingText ? (
                    <Spinner />
                ) : null}
            </Container>
        </>
    );
}
