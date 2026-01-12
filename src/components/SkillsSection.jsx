import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "MUI", level: 90, category: "frontend" },
  { name: "Ant Design", level: 90, category: "frontend" },
  { name: "SCSS/SASS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Nest.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "GitLab CI/CD", level: 90, category: "tools" },
  { name: "Redis", level: 90, category: "tools" },
  { name: "Zabbix", level: 90, category: "tools" },
  { name: "GitHub Actions", level: 90, category: "tools" },
  { name: "Jenkins", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

const categoryBadge = (cat) => {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset";
  switch (cat) {
    case "frontend":
      return cn(base, "bg-primary/10 text-primary ring-primary/20");
    case "backend":
      return cn(base, "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20");
    case "tools":
      return cn(base, "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20");
    default:
      return cn(base, "bg-muted text-foreground/70 ring-border");
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    return skills.filter(
      (s) => activeCategory === "all" || s.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground/70">
            A quick overview of the technologies I work with day to day.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <div className="flex flex-wrap items-center gap-2 rounded-full border bg-background/60 p-2 shadow-sm backdrop-blur">
            {categories.map((c) => {
              const isActive = activeCategory === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveCategory(c.key)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              
              <div className="text-left mb-4">
                
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
