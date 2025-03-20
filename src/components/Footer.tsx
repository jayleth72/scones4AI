export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Professional IT services and solutions tailored to meet your business needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@sconesit.com</li>
              <li>Phone: 0431 548 039</li>
              <li>Queensland, Australia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Scones & IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
