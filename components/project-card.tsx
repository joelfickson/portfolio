type ProjectCardProps = {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
};

export function ProjectCard({
  name,
  description,
  githubUrl,
  liveUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all duration-300 bg-white dark:bg-stone-900/50">
      <h3 className="font-display text-lg text-stone-900 dark:text-stone-100 mb-2">{name}</h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
        {description}
      </p>
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live
          </a>
        )}
      </div>
    </div>
  );
}
