const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Smita Bharath
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
            AI Engineer & Machine Learning Specialist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building production-ready RAG systems and AI solutions that transform how organizations 
            access and interact with knowledge. Specialized in retrieval-augmented generation, 
            vector databases, and scalable ML infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
