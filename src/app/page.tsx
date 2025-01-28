"use client";

import FormImage from "@/components/form";
import TextResult from "@/components/textResult";
import getTextFromImage from "@/services/uploadImageService";
import { FormEvent, useState } from "react";
import styles from "./page.module.scss";
import { Container, Spinner, Toast, ToastBody } from "reactstrap";
import Head from "next/head";

export default function Home() {
    const [text, setText] = useState("");
    const [loadingText, setLoadingText] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastText, setToastText] = useState("");
    const [toastColor, setToastColor] = useState("");

    const handlerSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setText("");
        setLoadingText(true);
        checkResponse(await getTextFromImage(ev.currentTarget));
    };

    const checkResponse = async (response: Response) => {
        setToastOpen(true);
        setTimeout(() => setToastOpen(false), 1000 * 4);
        setLoadingText(false);

        if (response.status == 200) {
            setToastText("Text extracted successfully");
            setToastColor("bg-success");

            const textImage = await response.json();

            setText(textImage.text);
        } else {
            setToastColor("bg-danger");
            const error = await response.json();
            setToastText(error.error);
        }
    };

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <h1 className={styles.title}>Extract texts from image</h1>
            <Container className={styles.container}>
                <FormImage handlerSubmit={handlerSubmit} />
                {text.length > 0 ? (
                    <TextResult text={text} />
                ) : loadingText ? (
                    <Spinner />
                ) : null}
            </Container>
            <Toast
                isOpen={toastOpen}
                className={`${toastColor} ${styles.toast}`}
                fade={true}
            >
                <ToastBody className="text-white font-weight-bold">
                    {toastText}
                </ToastBody>
            </Toast>
        </>
    );
}
