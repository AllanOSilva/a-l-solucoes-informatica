import Image from "next/image"

export default function Whatsapp(){
    return (
        <>
        <Image
      src="/whatsapp.jpg"
      alt="whatsapp"
      width={32}
      height={32}
      className="rounded-full flex"
    />
        </>
    )
}