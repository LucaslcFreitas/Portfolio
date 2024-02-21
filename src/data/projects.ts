import { ProjectType } from '../components/ProjectCard';

export const projectsData: ProjectType[] = [
    {
        id: '1',
        name: 'Portfólio',
        thumbnail: './assets/projects/portfolio/HomePage-tmp.png',
        createAt: '2024-02-22T14:40:17.380Z',
        descriptions: [
            'Bem-vindo ao meu portfólio! Sou um desenvolvedor front-end apaixonado por criar experiências web envolventes e funcionais. Com uma combinação de habilidades em HTML, CSS e JavaScript, junto com frameworks modernos como React Angular, e outros, estou constantemente buscando desafios que me permitam elevar o padrão de design e usabilidade na web.',
            'Cada projeto é uma oportunidade para explorar novas tecnologias, aprimorar minhas habilidades e, o mais importante, criar soluções que agreguem valor aos usuários.',
            'Estou sempre aberto a colaborações e novas oportunidades, então não hesite em entrar em contato se estiver interessado em trabalhar juntos ou apenas trocar ideias sobre o mundo excitante do desenvolvimento front-end.',
            'Projeto criado com: Next, Styled-components e Typescript.',
        ],
        repositoryUrl: 'https://github.com/LucaslcFreitas/Portfolio',
        viewUrl: 'https://lucas-lino.netlify.app/',
        images: [
            {
                id: '1',
                imgSource: './assets/projects/portfolio/HomePage.png',
                alt: 'Página inicial do projeto Portfólio',
            },
            {
                id: '2',
                imgSource: './assets/projects/portfolio/Skills.png',
                alt: 'Skills do projeto Portfólio',
            },
            {
                id: '3',
                imgSource:
                    './assets/projects/portfolio/ProjectsAndContacts.png',
                alt: 'Projetos no Portfólio',
            },
            {
                id: '4',
                imgSource: './assets/projects/portfolio/ViewProject.png',
                alt: 'Visualização dos projetos no Portfólio',
            },
        ],
    },
    {
        id: '2',
        name: 'Best Jobs',
        thumbnail: './assets/projects/bestjobs/thumbnail.png',
        createAt: '2024-02-07T00:00:00.380Z',
        descriptions: [
            'Projeto Best Jobs, uma plataforma simples para criar e compartilhar vagas de emprego.',
            'Contando com dois tipos de usuários, as empresas podem cadastrar vagas e aprovar/reprovar os candidatos; os candidatos podem cadastrar suas formações acadêmicas e experiências, e perquisar e candidatar-se nas vagas publicadas.',
            'Projeto criado praticar o desenvolvimento.',
            'Front-end: React, Redux, SASS, Axios, Typescript',
            'Back-end: Node, Express, Prisma, Auth JWT, Typescript',
        ],
        repositoryUrl: 'https://github.com/LucaslcFreitas/BestJobs',
        viewUrl: '',
        images: [
            {
                id: '1',
                imgSource: './assets/projects/bestjobs/HomePage1.png',
                alt: 'Página inicial do projeto Best Jobs',
            },
            {
                id: '2',
                imgSource: './assets/projects/bestjobs/HomePage2.png',
                alt: 'Página inicial do projeto Best Jobs',
            },
            {
                id: '3',
                imgSource: './assets/projects/bestjobs/Login.png',
                alt: 'Página de login do projeto Best Jobs',
            },
            {
                id: '4',
                imgSource: './assets/projects/bestjobs/Profile.png',
                alt: 'Página do perfil do usuário do projeto Best Jobs',
            },
            {
                id: '5',
                imgSource: './assets/projects/bestjobs/Search.png',
                alt: 'Página de pesquisa de vagas do projeto Best Jobs',
            },
            {
                id: '6',
                imgSource: './assets/projects/bestjobs/Candidacies1.png',
                alt: 'Página de candidatura do projeto Best Jobs',
            },
            {
                id: '7',
                imgSource: './assets/projects/bestjobs/Candidacies2.png',
                alt: 'Página de candidatura do projeto Best Jobs',
            },
        ],
    },
    {
        id: '3',
        name: 'Enjoy Moments',
        thumbnail: './assets/projects/enjoymoments/HomePage.png',
        createAt: '2023-10-11T00:00:00.380Z',
        descriptions: [
            'Projeto Enjoy Moments, uma plataforma simples para compartilhar momentos especiais do seu dia a dia!',
            'Projeto criado praticar o desenvolvimento.',
            'Esta aplicação web, construída com React no front-end e Node.js com Express, TypeORM e PostgreSQL no back-end, permite que os usuários criem posts, interajam com outros usuários através de comentários e expressem apreço por momentos inesquecíveis através de likes.',
            'Front-end: React, Context API, Axios',
            'Back-end: Node, Express, Type-ORM, Auth JWT',
        ],
        repositoryUrl: 'https://github.com/LucaslcFreitas/EnjoyMoments',
        viewUrl: '',
        images: [
            {
                id: '1',
                imgSource: './assets/projects/enjoymoments/HomePage.png',
                alt: 'Página inicial do projeto Enjoy Moments',
            },
            {
                id: '2',
                imgSource: './assets/projects/enjoymoments/Login.png',
                alt: 'Página de login do projeto Enjoy Moments',
            },
            {
                id: '3',
                imgSource: './assets/projects/enjoymoments/Signup.png',
                alt: 'Página de cadastro do projeto Enjoy Moments',
            },
            {
                id: '4',
                imgSource: './assets/projects/enjoymoments/MyPosts.png',
                alt: 'Página de meu posts do projeto Enjoy Moments',
            },
            {
                id: '5',
                imgSource: './assets/projects/enjoymoments/NewPost.png',
                alt: 'Página de criação de post no projeto Enjoy Moments',
            },
            {
                id: '6',
                imgSource: './assets/projects/enjoymoments/Post1.png',
                alt: 'Página de visualização de post no projeto Enjoy Moments',
            },
            {
                id: '7',
                imgSource: './assets/projects/enjoymoments/Post2.png',
                alt: 'Página de visualização de post no projeto Enjoy Moments',
            },
        ],
    },
];
