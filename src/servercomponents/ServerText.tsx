type ServerTextProps = {
    text: string
}

export default function ServerText({text}: ServerTextProps) {
    return <span>ServerText: {text}</span>
}