import { FormEvent } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

interface props {
    handlerSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

export default function FormImage({ handlerSubmit }: props) {
    return (
        <Form onSubmit={handlerSubmit}>
            <FormGroup>
                <Label htmlFor="upload_image">Upload your image</Label>
                <Input type="file" id="upload_image" name="upload_image" />
            </FormGroup>
            <Button type="submit">Extract</Button>
        </Form>
    );
}
