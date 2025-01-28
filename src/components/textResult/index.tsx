interface props {
    text: string
}

export default function TextResult({ text }: props) {
    return (
        <>
            <p>Your text is:</p>
            <p>{text}</p>
        </>
    )
}
