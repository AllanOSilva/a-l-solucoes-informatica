"use client"
import { Phone } from 'lucide-react';


export default function Contatos(){
    return (
        <>
        <div className="bg-blue-600 text-gray-200 p-2 max-w-full">
            <ul >
                <li className='flex'>
                    <Phone className='text-white' /><span className='px-2'>(21)99999-9999 |</span>
                </li>
                <li className='flex'>
                    <i className ="fab fa-whatsapp" />
                </li>
                <li className='flex'>
                    <i className ="fab fa-whatsapp" />
                </li>
            </ul>
            
        </div>
        </>
    )
}