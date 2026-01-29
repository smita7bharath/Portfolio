const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'SQL', 'Java', 'JavaScript', 'Shell Scripts'],
    },
    {
      title: 'GenAI & LLM Technologies',
      skills: [
        'Retrieval-Augmented Generation (RAG)',
        'Agentic RAG',
        'Prompt Engineering',
        'Tool-Augmented LLMs',
        'Embeddings',
        'Semantic Chunking',
        'Vector Search',
        'Retrieval Evaluation',
        'Hallucination Mitigation',
      ],
    },
    {
      title: 'GenAI Frameworks & APIs',
      skills: [
        'LangChain.js',
        'OpenAI API',
        'Azure OpenAI',
        'Amazon Bedrock',
        'FastAPI',
        'Flask',
        'REST APIs',
      ],
    },
    {
      title: 'ML Libraries',
      skills: [
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'XGBoost',
        'LightGBM',
        'TensorFlow',
        'Keras',
        'PyTorch',
        'Matplotlib',
        'Seaborn',
        'Plotly',
        'Altair',
        'Dask',
      ],
    },
    {
      title: 'Vector Databases & Search',
      skills: ['FAISS', 'ChromaDB', 'Vector Indexing', 'Similarity Search'],
    },
    {
      title: 'LLMOps / MLOps',
      skills: [
        'Docker',
        'Weights & Biases',
        'Prompt Flow',
        'CI/CD (Jenkins)',
        'Model Evaluation',
        'Monitoring',
        'Logging',
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 flex items-start"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{skill}</span>
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

export default Skills
