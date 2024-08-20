"use client"
export default function Searchbar(){
    return(
        <>
<div className=" flex gap-3 w-[30%]">
  <input
    type="search"
    className=" flex-auto rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-gray-200 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-black dark:placeholder:text-neutral-400 dark:autofill:shadow-autofill dark:focus:border-primary"
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