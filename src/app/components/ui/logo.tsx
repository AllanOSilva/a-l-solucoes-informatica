import Image from "next/image"

export default function Logo(){
    return (
        <>
        <Image
      src="/logo.jpg"
      alt="Logotipo"
      width={140}
      height={140}
      className="rounded-full flex  pr-px mr-5"
    />
        </>
    )
}