"use client"
import { getUser } from '@/lib/actions'
import chatSession from '@/lib/GeminiModel'
import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState<string>("patel-tejas")
    const [roastContent, setRoastContent] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const handleRoast = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setRoastContent("")

        try {
            const userData = await getUser(username);
            console.log(userData);

            const prompt = `You are a standup comedian doing roast of people. Well today you have a task of roasting software developers based on their github profile. I will provide you the details of user and you need to roast that particular id in 4-5 lines. It should be sarcastic and funny. If user has more repos like above 50-100 then also appreciate him. User details: \n${JSON.stringify(userData)}`

            const roast = await chatSession.sendMessage(prompt);
            const roastedText = await roast.response.text();
            console.log(roastedText);
            setRoastContent(roastedText);

        } catch (error) {
            // console.error("Error during roasting process:", error)
            setError("Failed to generate. Please try again later.")
        }
    }

    return (
        <div className='text-gray-300 z-10 mt-5'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-5'>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='patel-tejas' className='rounded-lg px-3 py-2 focus:outline-none text-black' />
                <button className='bg-blue-500 py-2 px-3 rounded-lg cursor-pointer uppercase font-semibold'
                    onClick={handleRoast} >Roast🔥</button>
            </div>

            <div>
                {roastContent && <p className='mt-5'>
                    {roastContent}
                </p>}
                {error && <p className='mt-5 text-red-500'>
                    {error}
                </p>}
            </div>
        </div>
    )
}

export default Form
