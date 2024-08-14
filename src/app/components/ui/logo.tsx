import Image from "next/image"

export default function Logo(){
    return (
        <>
        <Image
      src="/logo.jpg"
      alt="Logotipo"
      width={150}
      height={150}
      className="rounded-full flex"
    />
        </>
    )
}