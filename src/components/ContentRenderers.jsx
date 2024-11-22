import { Briefcase, Code, FileText, HelpCircle } from "lucide-react";
import PropTypes from "prop-types";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export const WhoamiContent = ({ data }) => (
  <div className="space-y-2 animate-slideIn">
    <pre className="text-green-400 font-mono overflow-x-auto whitespace-pre text-[2vw] sm:text-xs max-w-full">
      {data.ascii_art}
    </pre>

    <p className="text-green-400">{data.name}</p>
    <div className="flex items-center space-x-4">
      <p className="text-green-300">{data.title}</p>
      <a href={data.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-green-400 text-xl" />
      </a>
      <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-green-400 text-xl" />
      </a>
    </div>
    <p className="text-green-200 mt-2">{data.bio}</p>
  </div>
);

export const WorkContent = ({ work }) => (
  <div className="space-y-4 animate-slideIn">
    {work.map((job, index) => (
      <div
        key={index}
        className="border border-green-400/30 p-4 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center">
          <Briefcase className="w-4 h-4 mr-2 text-green-400" />
          <h3 className="text-green-400">
            {job.company} - {job.role}
          </h3>
        </div>
        <p className="text-green-300 text-sm">{job.period}</p>
        <ul className="mt-2 space-y-1">
          {job.highlights.map((highlight, i) => (
            <li key={i} className="text-green-200 text-sm">
              → {highlight}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const ProjectsContent = ({ projects }) => (
  <div className="space-y-4 animate-slideIn">
    {projects.map((project, index) => (
      <div
        key={index}
        className="border border-green-400/30 p-4 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center">
          <Code className="w-4 h-4 mr-2 text-green-400" />
          <h3 className="text-green-400 flex items-center">
            {project.name}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-400 hover:text-green-300"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-green-200 mt-2 text-sm">{project.description}</p>
      </div>
    ))}
  </div>
);

export const BlogContent = ({ blog }) => (
  <div className="space-y-4 animate-slideIn">
    {blog.map((post, index) => (
      <div
        key={index}
        className="border border-green-400/30 p-4 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center">
          <FileText className="w-4 h-4 mr-2 text-green-400" />
          <h3 className="text-green-400">{post.title}</h3>
        </div>
        <p className="text-green-300 text-sm">{post.date}</p>
        <div className="flex gap-2 mt-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const HelpContent = () => (
  <div className="space-y-4 animate-slideIn">
    <div className="flex items-center">
      <HelpCircle className="w-4 h-4 mr-2 text-green-400" />
      <h2 className="text-green-400 text-lg">Available Commands</h2>
    </div>
    <div className="space-y-2">
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">whoami</p>
        <p className="text-green-200 text-sm">Display profile information</p>
      </div>
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">work</p>
        <p className="text-green-200 text-sm">Show work experience</p>
      </div>
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">projects</p>
        <p className="text-green-200 text-sm">View personal projects</p>
      </div>
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">blog</p>
        <p className="text-green-200 text-sm">Read blog posts</p>
      </div>
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">help</p>
        <p className="text-green-200 text-sm">Show this help message</p>
      </div>
      <div className="bg-green-400/10 p-2 rounded">
        <p className="text-green-300">clear</p>
        <p className="text-green-200 text-sm">Clear terminal history</p>
      </div>
    </div>
  </div>
);

WhoamiContent.propTypes = {
  data: PropTypes.any,
};
WorkContent.propTypes = {
  work: PropTypes.any,
};
ProjectsContent.propTypes = {
  projects: PropTypes.any,
};
BlogContent.propTypes = {
  blog: PropTypes.any,
};
