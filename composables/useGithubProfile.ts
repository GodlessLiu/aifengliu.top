export default async function (): Promise<{
    success: boolean,
    profileText: string
}> {
    const data = await fetch("https://api.github.com/repos/GodlessLiu/GodlessLiu/contents/README.md", {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.raw+json",
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })
    const profileText = await data.text()
    return {
        success: true,
        profileText
    }

}