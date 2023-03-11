module.exports = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/instagram',
                destination: 'https://www.instagram.com/facynfn/',
                permanent: true
            },
            {
                source: '/twitch',
                destination: 'https://www.twitch.tv/facynnnnn',
                permanent: true
            },
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/@Facynnn',
                permanent: true
            },
            {
                source: '/github',
                destination: 'https://github.com/FacynDev',
                permanent: true
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/ast6sc3VFZ',
                permanent: true
            },
            {
                source: '/contacto',
                destination: 'mailto:contacto@facyn.xyz',
                permanent: true
            },
            {
                source: '/rashsecurity',
                destination: 'https://rashsecurity.xyz',
                permanent: true
            },
            {
                source: '/simplecalculator',
                destination: 'https://simplecalculator.ml',
                permanent: true
            },
            {
                source: '/todolistapp',
                destination: 'https://todolistapp.tk/',
                permanent: true
            }
        ]
    }
}