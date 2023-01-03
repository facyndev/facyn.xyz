module.exports = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/social/instagram',
                destination: 'https://www.instagram.com/facynnn/',
                permanent: true
            },
            {
                source: '/social/youtube',
                destination: 'https://www.youtube.com/channel/UCk9IaSW8sjdFNarHSEP_yNg',
                permanent: true
            },
            {
                source: '/social/github',
                destination: 'https://github.com/Facynn',
                permanent: true
            },
            {
                source: '/social/discord',
                destination: 'https://discord.gg/T9xJRYWvjp',
                permanent: true
            },
        ]
    }
}