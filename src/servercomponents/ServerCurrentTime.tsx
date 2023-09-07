export default function ServerCurrentTime() {
    const now = Date.now()
    return <span>CurrentTime: {now}</span>
}