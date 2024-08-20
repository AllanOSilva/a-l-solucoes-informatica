"use client"
import { Phone } from 'lucide-react';
import Whatsapp from './ui/whatsapp';


export default function Contatos(){
    return (
        <>
        <div className="bg-blue-600 text-gray-200 p-2 max-w-full  flex" >
                <span className='flex'>
                    <Phone className='text-white' /><span className='px-2'>(21) 97041-6875 |</span>
                </span>
                <span className='flex'>
                    <a href="https://wa.me/5521970416875"><Whatsapp /></a>
                </span>
                <span className='flex'>
                    
                </span>
            
            
        </div>
        </>
    )
}