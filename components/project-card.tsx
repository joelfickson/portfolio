type ProjectCardProps = {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  index?: number;
};

export function ProjectCard({
  name,
  description,
  githubUrl,
  liveUrl,
  techStack,
}: ProjectCardProps) {
  const Wrapper = githubUrl ? "a" : "div";
  const wrapperProps = githubUrl
    ? { href: githubUrl, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col justify-between p-5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors truncate pr-2">
            {name}
          </h3>
          {githubUrl && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-stone-300 dark:text-stone-700 group-hover:text-accent-500 transition-colors flex-shrink-0"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          )}
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-stone-150 dark:border-stone-800 text-stone-400 dark:text-stone-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
