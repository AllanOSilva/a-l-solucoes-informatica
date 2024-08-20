"use client"
export default function Searchbar(){
    return(
        <>
<div className="flex gap-3 place-self-center ">
  <input
    type="search"
    className=" rounded border border-solid border-neutral-200 bg-white bg-clip-padding py-3 outline-none transition dark:text-black"
    id="exampleFormControlInput2"
    />
  <button type="button"
  className="flex items-center bg-green-600 rounded-md hover:bg-green-700 whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
    id="button-addon2">
    Pesquisar
  </button>
</div>

        </>
    )
}