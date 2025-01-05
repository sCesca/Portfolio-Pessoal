interface TimelineWorkType {
  id: number;
  title: string;
  company: string;
  description: string;
  date: string;
  icon: string;
  color: string;
  tech: string[];
  link: string;
}

const TimeLineWork: TimelineWorkType[] = [
  {
    id: 1,
    title: "Desenvolvedor Full-stack",
    company: "Embrapa Agricultura Digital",
    description: "Desenvolvimento de uma aplicação mobile",
    date: "2023 - 2024",
    icon: "work",
    color: "green",
    tech: ["React Native", "Expo", "GitLab", "Figma"],
    link: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/5423/aplicativo-roda-da-reproducao---programa-balde-cheio",
  },
  {
    id: 2,
    title: "Bolsista pesquisador",
    company: "Embrapa Agricultura Digital",
    description: "Análise exploratória e limpeza de dados",
    date: "2024 - 2024",
    icon: "work",
    color: "blue",
    tech: ["Python", "Pandas", "Matplotlib", "Sci-kit learn"],
    link: "https://www.embrapa.br/",
  },
];

export default TimeLineWork;
export type { TimelineWorkType };
