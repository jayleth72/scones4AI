export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Scones & IT</h1>
        <p className="text-xl text-gray-600">IT Services and Solutions for the Mary Valley</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
          <p className="text-gray-600">Description of your first main feature or service.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
          <p className="text-gray-600">Description of your second main feature or service.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
          <p className="text-gray-600">Description of your third main feature or service.</p>
        </div>
      </section>
    </div>
  )
}
