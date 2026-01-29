const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm an AI Engineer and Machine Learning Specialist with a passion for building 
            production-ready systems that solve real-world problems. Currently pursuing my 
            Master's in Computer Science at San Diego State University, I specialize in 
            Retrieval-Augmented Generation (RAG), agentic AI systems, and scalable ML infrastructure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My experience spans from developing enterprise RAG chatbots that reduce manual 
            lookup effort by 60% to building research platforms that improve data accessibility 
            by 50%. I'm particularly interested in optimizing retrieval pipelines, improving 
            contextual answer accuracy, and deploying scalable AI systems that deliver measurable 
            business impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, I enjoy staying current with the latest developments in 
            generative AI, exploring new vector database technologies, and contributing to 
            open-source ML projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
