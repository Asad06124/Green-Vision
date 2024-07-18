function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Green Vision is a premier company dedicated to the art and
            science of irrigation and landscaping. We cultivate lush,
            sustainable environments from the ground up, fostering a vibrant
            community of nature enthusiasts.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 p-10">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300 p-10"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/our-solutions"
                className="hover:text-white transition-colors duration-300 p-10"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-white transition-colors duration-300 pt-10 p-10"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300 p-10"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Punjab Pakistan</p>
          <p>Fatima Jinnah Town, Multan</p>
          <p>Email: info@greenvisioni.com</p>
          <p>Phone: 03070283818</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Green Vision. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
