'use client'

export default function ClientCurrentTime() {
    const now = Date.now()
    return <span>CurrentTime: {now}</span>
}

