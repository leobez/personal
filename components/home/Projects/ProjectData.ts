// CINELOG
// DIVULGACAMPO
// TCC
// VIRTUAL MACHINES
// MQTT

// STILL MISSING: DOCKER ON AWS, JAVA APP AND NODE.JS APP


export interface ProjectTYPE {
    id: number;
    name: string;
    image_path: string;
    link_repo: string;
    link_project: string|null;
    tech_stack: string[];
    desc:string;
}


/* THIS 'desc' IS UNUSED BECAUSE OF LOCALE */
export const PROJECTDATA:ProjectTYPE[] = [
    {
        id: 0,
        name: "CINELOG",
        image_path: "/images/cinelog/cinelog.png",
        link_repo: "https://github.com/leobez/cinelog",
        link_project: "https://cinelogleob.vercel.app/",
        tech_stack: ["JAVASCRIPT", "HTML", "CSS", "TAILWIND CSS", "REACT.JS", "NODE JS", "REST API"],
        desc: "Um site para descobrir e filtrar filmes. Através da The Movie Database (TMDB), é possível buscar mais de 100 mil filmes utilizando diversos tipos de filtros, como: filmes mais bem avaliados, filmes mais populares, novos lançamentos e muito mais."
    },

    {
        id: 1,
        name: "DIVULGACAMPO",
        image_path: "/images/divulgacampo/divulgacampo.png",
        link_repo: "https://github.com/leobez/divulgacampo",
        link_project: "https://divulgacampo.web.app/",
        tech_stack: ["JAVASCRIPT", "HTML", "CSS", "REACT.JS", "FIREBASE"],
        desc: "Um site full-stack para divulgação de pesquisas de campo. Realize um registro no site, crie uma pesquisa de campo e a compartilhe no site."
    },

    {
        id: 2,
        name: "SEO-COMPARISON",
        image_path: "/images/seo-comparison/seo-comparison.png",
        link_repo: "https://github.com/leobez/seo-comparison",
        link_project: "https://ric.cps.sp.gov.br/handle/123456789/21533",
        tech_stack: ['REACT.JS', 'NEXT.JS', 'TAILWIND CSS', 'LIGHTHOUSE', 'SEO'],
        desc: "Pesquisa de comparação de SEO das abordagens de renderização de sites SSR e CSR com React.js e Next.js."
    },

    {
        id: 3,
        name: "VM-MONITOR",
        image_path: "/images/vm-monitor/vm-monitor.png",
        link_repo: "https://github.com/leobez/ads-content/tree/main/VM-monitor",
        link_project: null,
        tech_stack: ['LINUX', 'TELEGRAF', 'MQTT', 'DOCKER', 'INFLUX DB', 'GRAFANA'],
        desc: "Planejamento e prática da aplicação do protocolo MQTT para o monitoramento de máquinas virtuais.",
    },

    {
        id: 4,
        name: "CHAT-MQTT",
        image_path: "/images/chat-mqtt/chat-mqtt.png",
        link_repo: "https://github.com/leobez/ads-content/tree/main/Chat-mqtt",
        link_project: "https://chatmqttleob.vercel.app/",
        tech_stack: ['JAVASCRIPT', 'TYPESCRIPT', 'REACT.JS', 'MQTT'],
        desc: "Site que disponibiliza uma interface para enviar e receber mensagens através de um broker MQTT."
    },

    {
        id: 5,
        name: "JAVA-EXERCISES",
        image_path: "/images/java-exe/java-exe.png",
        link_repo: "https://github.com/leobez/ads-content/tree/main/OOP-Exercises",
        link_project: null,
        tech_stack: ['JAVA'],
        desc: "Série de exercicíos em JAVA que utilizam dos mais importantes conceitos de programação orientada a objetos, como: classes, objetos, herança, encapsulamento e polimorfismo."
    },

]