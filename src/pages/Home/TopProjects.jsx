import proImg from "../../assets/proImg.png";
import FillButton from "../../components/FillButton";
import ProjectTemplate from "../../components/ProjectTemplate";
export default function TopProject() {
  const projectsData = [
    {
      title: "Inana Vault",
      date: "2025",
      proImg: proImg,
      tagsArray: ["tailwind", "react", "nestJs", "postgresql"],
      websiteLink: "https://frontend-ecomerce-nu.vercel.app/",
      CodeRepo: [
        {
          link: "https://github.com/hyi4u/frontend-ecomerce",
          label: "frontend repo",
        },
        {
          link: "https://github.com/hyi4u/ecomerce",
          label: "backend ropo",
        },
      ],
      larger: false,
      codeState: false,
    },
    {
      title: "NeuroScan AI",
      date: "2026",
      proImg: proImg,
      tagsArray: ["Python", "TensorFlow", "FastAPI", "React"],
      websiteLink: "https://neuroscan-demo.com",
      CodeRepo: [
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "frontend code",
        },
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "backend code",
        },
      ],
      larger: false,
    },
    {
      title: "PharmaFlow ERP",
      date: "2025",
      proImg: proImg,
      tagsArray: ["NestJS", "PostgreSQL", "Next.js"],
      websiteLink: "https://pharma-flow.com",
      CodeRepo: [
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "frontend code",
        },
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "backend code",
        },
      ],

      larger: false,
    },
    {
      title: "EcoTrack Mobile",
      date: "2025",
      proImg: proImg,
      tagsArray: ["React Native", "Firebase", "UI/UX"],
      websiteLink: "https://ecotrack.app",
      CodeRepo: [
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "frontend code",
        },
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "backend code",
        },
      ],
      larger: false,
    },
    {
      title: "Aspirin Derivative In-Silico Analysis",
      date: "2026",
      proImg: proImg,
      tagsArray: ["ML", "Scikit-Learn", "RDKit", "Python"],
      websiteLink: "https://aspirin-research.vercel.app",
      CodeRepo: [
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "frontend code",
        },
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "backend code",
        },
      ],
      larger: true,
    },
    {
      title: "SaaS Dashboard Kit",
      date: "2024",
      proImg: proImg,
      tagsArray: ["Tailwind", "TypeScript", "Chart.js"],
      websiteLink: "https://saas-kit.dev",
      CodeRepo: [
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "frontend code",
        },
        {
          link: "https://github.com/HayU49/neuro-scan",
          label: "backend code",
        },
      ],
      larger: false,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* head stuff  */}
      <div>
        <div className="relative p-px w-fit rounded-2xl bg-linear-to-l from-secondary to-white mb-4">
          <div className="background-primary px-4 py-2 rounded-[calc(1rem-1px)]">
            <h3 className="text-white font-medium ">PROJECTS</h3>
          </div>
        </div>
        <div>
          <h2>A closer look at some of the projects I'm proud of</h2>
        </div>
      </div>

      {/* projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <ProjectTemplate
            proImg={project.proImg}
            title={project.title}
            date={project.date}
            tagsArray={project.tagsArray}
            websiteLink={project.websiteLink}
            CodeRepo={project.CodeRepo}
            larger={project.larger}
            codeState={project.codeState ? project.codeState : false}
          />
        ))}
      </div>
    </div>
  );
}
