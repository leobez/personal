// CINELOG
// DIVULGACAMPO
// TCC
// VIRTUAL MACHINES
// MQTT

// DOCKER ON AWS
// JAVA (?)
// NODE.JS (?)

export interface Project {
    id: number;
    name: String;
    image_path: String;
    link_repo: String;
    link_project: String;
    tech_stack: String[];
}

export const PROJECTDATA:Project[] = [
    {
        id: 0,
        name: "CINELOG",
        image_path: "/images/cinelog/media-collection.png",
        link_repo: "https://github.com/leobez/cinelog",
        link_project: "https://cinelogleob.vercel.app/",
        tech_stack: ["JAVASCRIPT", "HTML", "CSS", "TAILWIND CSS", "REACT.JS", "REST API"],
    },
]