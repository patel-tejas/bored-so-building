"use server"

import axios from "axios"

export const getUser = async (username: string) => {
    try {
        const data = await axios.get(`https://api.github.com/users/${username}`)
        const parsedData = data.data

        const userData = {
            bio: parsedData.bio,
            followers: parsedData.followers,
            following: parsedData.following,
            repos: parsedData.public_repos,
            twitter: parsedData.twitter_username,
            location: parsedData.location,
        }
        return userData
    } catch (error) {
        // console.error("Error fetching GitHub user data:", error)
        throw new Error("Failed to fetch GitHub user data. Please try again later.")
    }
}
