// CINELOG
// DIVULGACAMPO
// TCC
// VIRTUAL MACHINES
// MQTT

// STILL MISSING: DOCKER ON AWS, JAVA APP AND NODE.JS APP


export interface Project {
    id: number;
    name: String;
    image_path: String;
    link_repo: String;
    link_project: String|null;
    tech_stack: String[];
    desc:String;
}

export const PROJECTDATA:Project[] = [
    {
        id: 0,
        name: "CINELOG",
        image_path: "/images/cinelog/media-collection.png",
        link_repo: "https://github.com/leobez/cinelog",
        link_project: "https://cinelogleob.vercel.app/",
        tech_stack: ["JAVASCRIPT", "HTML", "CSS", "TAILWIND CSS", "REACT.JS", "REST API"],
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
        desc: "Comparação do impacto em SEO das abordagens de renderização de sites SSR e CSR."
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

]