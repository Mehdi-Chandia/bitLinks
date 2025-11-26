import Shorten from "@/app/components/Shorten"

export default function Page() {
    return (
        <Shorten host={process.env.NEXT_PUBLIC_HOST} />
    )
}
