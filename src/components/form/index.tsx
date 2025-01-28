import { FormEvent, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";

interface props {
    handlerSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

export default function FormImage({ handlerSubmit }: props) {
    const [haveFile, setHaveFile] = useState(false);
    const handleFileChange = (ev: FormEvent<HTMLInputElement>) => {
        if (ev.currentTarget.files) setHaveFile(true);
    };
    return (
        <Form onSubmit={handlerSubmit} className={styles.form}>
            <FormGroup>
                <Label htmlFor="upload_image" className={styles.label}>
                    Upload your image
                </Label>
                <Input
                    type="file"
                    id="upload_image"
                    name="upload_image"
                    onChange={handleFileChange}
                />
            </FormGroup>
            <Button
                outline
                disabled={!haveFile}
                className={styles.button}
                type="submit"
            >
                Extract
            </Button>
        </Form>
    );
}
