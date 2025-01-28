interface props {
    text: string
}

export default function TextResult({ text }: props) {
    return (
        <>
            <h3 className="mb-3">Your text is:</h3>
            <p>{text}</p>
        </>
    )
}
