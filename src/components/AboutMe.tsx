import React from "react";

type Level = "Proficient" | "Comfortable" | "Familiar";
type Skill = { name: string; level: Level };
type SkillMap = Record<string, Skill[]>;

const LevelBadge: React.FC<{ level: Level }> = ({ level }) => (
  <span className="ml-2 inline-block rounded px-2 py-0.5 text-xs border border-accent-light/30 dark:border-accent-dark/30 text-secondary-light dark:text-secondary-dark">
    {level}
  </span>
);

const skills: SkillMap = {
  Languages: [
    { name: "Python", level: "Proficient" },
    { name: "Go (Golang)", level: "Proficient" },
    { name: "Java", level: "Proficient" },
    { name: "JavaScript", level: "Familiar" },
    { name: "Bash", level: "Comfortable" },
    { name: "C++", level: "Comfortable" }
  ],
  "Front-End": [
    { name: "React", level: "Proficient" },
    { name: "useContext", level: "Proficient" },
    { name: "Angular", level: "Familiar" }
  ],
  "Back-End & Services": [
    { name: "FastAPI", level: "Comfortable" },
    { name: "Celery (tasks)", level: "Proficient" },
    { name: "Redis (broker/backend)", level: "Proficient" }
  ],
  "Data & Storage": [
    { name: "PostgreSQL", level: "Proficient" },
    { name: "MongoDB", level: "Proficient" },
    { name: "DynamoDB", level: "Comfortable" }
  ],
  "ETL / Orchestration": [{ name: "Apache Airflow", level: "Proficient" }],
  "Cloud & DevOps": [
    { name: "AWS Lambda", level: "Proficient" },
    { name: "API Gateway", level: "Proficient" },
    { name: "Cognito", level: "Proficient" },
    { name: "Amplify", level: "Proficient" },
    { name: "Docker", level: "Proficient" },
    { name: "Jenkins (pipelines)", level: "Proficient" },
    { name: "Git", level: "Proficient" }
  ],
  "Security / Auth": [
    { name: "JWT / OIDC", level: "Comfortable" },
    { name: "Secrets management", level: "Comfortable" },
    { name: "Threat modeling (masters)", level: "Comfortable" }
  ],
  Testing: [
    { name: "Selenium", level: "Proficient" },
    { name: "Playwright", level: "Proficient" }
  ],
  "Platforms / Networking": [
    { name: "Linux (Ubuntu, Arch)", level: "Proficient" },
    { name: "Unix tooling", level: "Proficient" },
    { name: "Proxmox", level: "Comfortable" },
    { name: "OPNsense", level: "Comfortable" }
  ]
};

const AboutMe: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - About & Experience */}
      <section aria-labelledby="about" className="space-y-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-xl border border-accent-light/10 dark:border-accent-dark/10">
          <h3 id="about" className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4 font-mono">
            Background
          </h3>
          <p className="text-secondary-light dark:text-secondary-dark leading-relaxed">
            Software Engineer at Apple with experience in workflow optimization, authentication systems, and full-stack development.
            Focused on building efficient, secure, and scalable applications.
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-xl border border-accent-light/10 dark:border-accent-dark/10">
          <h3 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4 font-mono">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-accent-light dark:border-accent-dark pl-4">
              <h4 className="text-text-light dark:text-text-dark font-medium">ICT3 — Apple</h4>
              <p className="text-secondary-light dark:text-secondary-dark">Aug 2024 – Present</p>
              <ul className="text-secondary-light dark:text-secondary-dark mt-2 list-disc list-inside space-y-2">
                <li>Developed and optimized Airflow workflows for complex data pipelines</li>
                <li>Integrated authentication systems with A2A and role-based access</li>
              </ul>
            </div>

            <div className="border-l-2 border-accent-light dark:border-accent-dark pl-4">
              <h4 className="text-text-light dark:text-text-dark font-medium">Senior Software Engineer — Visa</h4>
              <p className="text-secondary-light dark:text-secondary-dark">Jun 2022 – Aug 2024</p>
              <ul className="text-secondary-light dark:text-secondary-dark mt-2 list-disc list-inside space-y-2">
                <li>Built full-stack apps with Angular and Golang</li>
                <li>Hardened CI/CD with Jenkins; reduced deployment errors</li>
                <li>Advanced to final round in global hackathon with an AI solution</li>
              </ul>
            </div>

            <div className="border-l-2 border-accent-light dark:border-accent-dark pl-4">
              <h4 className="text-text-light dark:text-text-dark font-medium">Full-Stack Engineer — One Imprint</h4>
              <p className="text-secondary-light dark:text-secondary-dark">Aug 2019 – Aug 2020</p>
              <ul className="text-secondary-light dark:text-secondary-dark mt-2 list-disc list-inside space-y-2">
                <li>Improved engagement via UX enhancements</li>
                <li>Implemented responsive design; improved mobile retention</li>
                <li>Refactored pages for maintainability and reuse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column - Skills, Education, Contact */}
      <section aria-labelledby="skills" className="space-y-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-xl border border-accent-light/10 dark:border-accent-dark/10">
          <h3 id="skills" className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4 font-mono">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h4 className="text-text-light dark:text-text-dark font-medium font-mono">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, level }) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-background-light dark:bg-background-dark text-secondary-light dark:text-secondary-dark rounded-md text-sm border border-accent-light/20 dark:border-accent-dark/20 hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300"
                    >
                      {name}
                      <LevelBadge level={level} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-xl border border-accent-light/10 dark:border-accent-dark/10">
          <h3 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4 font-mono">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-text-light dark:text-text-dark font-medium">MS Cybersecurity</h4>
              <p className="text-secondary-light dark:text-secondary-dark">New York University — New York, NY</p>
              <p className="text-secondary-light dark:text-secondary-dark">Aug 2025 – Present</p>
            </div>
            <div>
              <h4 className="text-text-light dark:text-text-dark font-medium">BS Computer Science</h4>
              <p className="text-secondary-light dark:text-secondary-dark">University of Puget Sound — Tacoma, WA</p>
              <p className="text-secondary-light dark:text-secondary-dark">Aug 2018 – Aug 2022</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-xl border border-accent-light/10 dark:border-accent-dark/10">
          <h3 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4 font-mono">Contact</h3>
          <nav className="space-y-3" aria-label="Contact links">
            <div className="flex items-center space-x-3 text-secondary-light dark:text-secondary-dark group">
              <svg className="w-5 h-5 text-accent-light dark:text-accent-dark" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:dominic@domec.dev" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                dominic@domec.dev
              </a>
            </div>
            <div className="flex items-center space-x-3 text-secondary-light dark:text-secondary-dark">
              <svg className="w-5 h-5 text-accent-light dark:text-accent-dark" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+17373294999" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                (737) 329-4999
              </a>
            </div>
            <div className="flex items-center space-x-3 text-secondary-light dark:text-secondary-dark">
              <svg className="w-5 h-5 text-accent-light dark:text-accent-dark" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <a href="https://www.domec.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                www.domec.dev
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

