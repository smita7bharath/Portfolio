const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineer (Co-op)',
      company: 'R&D Systems - Werfen',
      location: 'San Diego, CA',
      period: 'May 2025 – Dec 2025',
      achievements: [
        'Developed a production-ready full-stack RAG chatbot using Next.js, TypeScript, and LangChain.js with OpenAI embeddings for semantic document retrieval and Q&A, reducing manual lookup effort by 60%',
        'Integrated structured SAP enterprise data with unstructured technical documentation into the RAG pipeline, enabling unified semantic retrieval across heterogeneous data sources and improving response accuracy by 30%',
        'Optimized and scaled the RAG retrieval pipeline, validating retrieval quality, latency, and response grounding under concurrent user queries, improving contextual answer accuracy by 40%',
      ],
    },
    {
      title: 'Machine Learning Engineer (Research Assistant)',
      company: 'San Diego State University',
      location: 'San Diego, CA',
      period: 'Jan 2025 – May 2025',
      achievements: [
        'Built a production-oriented RAG-based medical chatbot using Azure AI Foundry, integrating a domain-specific knowledge base with automated retrieval to deliver real-time contextual insights for cardiovascular research, improving data accessibility by 50%',
        'Implemented and maintained Apache Airflow workflows to automate continuous data ingestion, designing scalable DAGs for ETL pipelines and validating ingestion performance under increasing data volume and refresh frequency to support a production RAG system with 99% data accuracy',
      ],
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'CSG Systems',
      location: 'Bengaluru, India',
      period: 'Feb 2024 – Jun 2024',
      achievements: [
        'Developed and enhanced 5+ production web features for telecom billing systems using Angular and TypeScript, integrating backend APIs for real-time data validation and map recording, improving data accuracy by 20%',
        'Collaborated with cross-functional teams to implement and deploy new features in an Agile development workflow, achieving a 98% sprint objective completion rate',
        'Implemented unit, integration, and end-to-end testing to improve code reliability and identify critical defects early in the development lifecycle',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary-200 hover:border-primary-400 transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-primary-600 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, achIndex) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
