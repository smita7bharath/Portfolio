const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Master of Science in Computer Science
                </h3>
                <p className="text-lg font-medium text-primary-600 mb-2">
                  San Diego State University
                </p>
                <p className="text-gray-600 mb-4">San Diego, CA</p>
                <div className="mt-4">
                  <p className="text-gray-700 font-medium mb-2">Relevant Coursework:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>CS660 - Algorithms</li>
                    <li>CS549 - Machine Learning</li>
                    <li>CS577 - Data Science</li>
                  </ul>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                Aug 2024 – May 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
