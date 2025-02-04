const getTextFromImage = async (form: HTMLFormElement) => {
    if (!process.env.NEXT_PUBLIC_API_URL)
        throw new Error("Url to api not set");
    
    const formData = new FormData(form);
    
    const response = await fetch("/api/extract", {
        body: formData,
        method: "post",
    });

    return response;
};

export default getTextFromImage;
