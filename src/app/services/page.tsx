export default function Services() {
  const services = [
    {
      title: 'Service 1',
      description: 'Detailed description of your first service offering.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Service 2',
      description: 'Detailed description of your second service offering.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Service 3',
      description: 'Detailed description of your third service offering.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg 
                      className="h-5 w-5 text-primary mr-2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
