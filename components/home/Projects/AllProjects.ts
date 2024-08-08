export const AllProjects = [

    {
        id: 0,
        name: 'ads-content',
        description: 'Conjunto de projetos feitos na faculdade de ADS.',
        topics: ['Various'],
        repo_link: 'https://github.com/leobez/ads-content',
        project_link: '',
        image_src: '/images/ads-content.png',
        showcase: [
            {
                id: 0,
                image_src: '/images/ads-content.png',
            },
        ]
    },

    {
        id: 1,
        name: 'divulgacampo',
        description: 'Site para divulgação de pesquisas de campo.',
        topics: ['React.js', 'CSS', 'Firebase', 'Context API'],
        repo_link: 'https://github.com/leobez/divulgacampo',
        project_link: 'https://divulgacampo.web.app/',
        image_src: '/images/divulgacampo.png',
        showcase: [
            {
                id: 0,
                image_src: '/images/divulgacampo.png',
            },
        ]
    },

    {
        id: 2, 
        name: 'seo-comparison',
        description: 'Monografia para a conclusão do curso em ADS na Fatec. Comparação do impacto em SEO das abordagens de renderização de sites SSR e CSR.',
        topics: ['React.js', 'Next.js', 'Tailwind CSS', 'Web Vitals', 'SSR', 'CSR', 'SEO'],
        repo_link: 'https://github.com/leobez/seo-comparison',
        project_link: 'https://ric.cps.sp.gov.br/handle/123456789/21533',
        image_src: '/images/seo-comparison.png',
        showcase: [
            {
                id: 0,
                image_src: '/images/seo-comparison.png',
            },
        ]
    },
    
    {
        id: 3,
        name: 'cinelog',
        description: 'Site que usa uma API pública pra exibir filmes com alguns recursos de busca/filtragem.',
        topics: ['React.js', 'TypeScript', 'Vercel', 'React icons', 'Tailwind CSS', 'DaisyUI', 'Context API', 'TMDB'],
        repo_link: 'https://github.com/leobez/cinelog',
        project_link: 'https://cinelogleob.vercel.app/',
        image_src: '/images/media-collection.png',
        showcase: [

            // Base 
            {
                id: 0,
                image_src: '/images/media-collection.png',
            },

            // show movie/:id
            {
                id: 1,
                image_src: '/images/movie.png',
            },
            // show filtering by genre
            {
                id: 2,
                image_src: '/images/bygenre.png',
            },
            // show filtering by query
            {
                id: 3,
                image_src: '/images/byquery.png',
            },
            // show color scheme
            {
                id: 4,
                image_src: '',
                multiple_src: [
                    '/images/color-themes/color1.png',
                    '/images/color-themes/color2.png',
                    '/images/color-themes/color3.png',
                    '/images/color-themes/color4.png',
                    '/images/color-themes/color5.png',
                ]
            },

            // show random
            {
                id: 5,
                image_src: '/images/random.png',
            },
        ]
    },

]
 