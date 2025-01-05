interface TimelineschoolType {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: string;
  color: string;
  tech: string[];
  link: string;
}

const TimeLineSchool: TimelineschoolType[] = [
  {
    id: 1,
    title: "ETEC Ferrúcio Humberto Gazzetta",
    location: "Nova Odessa - SP",
    description: "Aluno do ensino médio integrado com o curso de Marketing",
    date: "2018 - 2020",
    icon: "school",
    color: "blue",
    tech: ["Word", "Excel", "Power Point", "Corel Draw"],
    link: "https://etecdenovaodessa.cps.sp.gov.br/",
  },
  {
    id: 2,
    title: "Universidade Federal de Santa Maria - UFSM",
    location: "Santa Maria - RS",
    description: "Aluno do curso de Ciência da Computação",
    date: "2021 - 2022",
    icon: "school",
    color: "purple",
    tech: ["C/C++", "Linux", "MIPS Assembly x86", "Git"],
    link: "https://www.ufsm.br/cursos/graduacao/santa-maria/ciencia-da-computacao",
  },
  {
    id: 3,
    title: "Pontifícia Universidade Católica de Campinas - PUC-Campinas",
    location: "Campinas - SP",
    description: "Aluno do curso de Sistemas de Informação",
    date: "2022 - 2026",
    icon: "school",
    color: "red",
    tech: ["Front-end", "UI/UX", "Back-end", "Banco de Dados"],
    link: "https://www.puc-campinas.edu.br/graduacao/sistemas-de-informacao/",
  },
];

export type { TimelineschoolType };

export default TimeLineSchool;
