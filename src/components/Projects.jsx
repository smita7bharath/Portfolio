const Projects = () => {
  const projects = [
    {
      title: 'AstraRAG - Enterprise RAG Platform',
      period: 'Jan 2026',
      technologies: [
        'Python',
        'LangChain',
        'Agentic RAG',
        'Vector Databases',
        'Docker',
        'AWS EC2',
      ],
      achievements: [
        'Designed and built a production-grade agentic RAG platform for enterprise knowledge discovery, enabling multi-step reasoning and contextual question answering over large internal document repositories',
        'Implemented automated document ingestion, semantic chunking, and vector-based retrieval pipelines, indexing 100K+ document chunks and sustaining sub-2s average retrieval latency under concurrent user queries',
        'Developed tool-augmented LLM agents for retrieval, summarization, and follow-up reasoning, improving contextual answer accuracy by 40% and reducing hallucinated responses by 30% compared to single-pass RAG baselines',
        'Containerized backend and frontend services using Docker and deployed on AWS EC2, achieving 99% service uptime during sustained functional and scalability testing',
      ],
    },
    {
      title: 'DocIntel',
      period: 'Dec 2025',
      technologies: ['Python', 'LangChain', 'Vector Databases', 'AWS EC2'],
      achievements: [
        'Designed and built a RAG-based research knowledge platform enabling semantic search and contextual question answering over large collections of unstructured academic documents, reducing manual information retrieval time by 50%',
        'Optimized retrieval performance through chunk-size tuning, embedding strategy selection, and top-k retrieval configuration, improving answer relevance by 35% and reducing unnecessary context injection by 30% during inference',
        'Deployed the platform on AWS EC2 and validated performance under concurrent user workloads, reducing average response latency by 30% while maintaining consistent response grounding and accuracy',
      ],
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {project.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-3">
                {project.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-gray-700 flex items-start"
                  >
                    <span className="text-primary-500 mr-3 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
