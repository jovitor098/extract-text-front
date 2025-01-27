const getTextFromImage = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const response = await fetch(process.env.API_URL!, {
         body: formData
    })

    return response.text
};

export default getTextFromImage;
