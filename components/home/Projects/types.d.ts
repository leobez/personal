export type LocaleProps = {
    localeContent: {
        l_title:string;
        l_subtitle:string;
        l_projects:LocalizedProjectContent[];
        l_linkRepo:string;
        l_linkProject:string;
    }
}

export type LocalizedProjectContent = {
    projectDesc:string;
    showcaseDesc:ShowCaseDesc[];
}

export type ShowCaseDesc = {
    id:string;
    text:string;
}

//--//

export type Project = {
    id: number;
    name: string;
    description: string;
    topics: string[];
    repo_link: string;
    project_link: string;
    image_src: string;
    showcase:ShowCaseImage[]
}

export type ShowCaseImage = {
    id:number;
    image_src:string; 
    multiple_src?:string[]
 }
 