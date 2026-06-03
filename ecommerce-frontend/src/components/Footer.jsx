import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              ShopSphere
            </h2>

            <p className="mt-4 text-sm">
              Your one-stop destination for quality
              products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/products">Products</a>
              </li>

              <li>
                <a href="/cart">Cart</a>
              </li>

              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>

            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <p>Email: support@shopsphere.com</p>
            <p>Phone: +91 9876543210</p>

            <div className="flex gap-4 mt-4 text-xl">

              <FaFacebook className="cursor-pointer hover:text-white" />

              <FaInstagram className="cursor-pointer hover:text-white" />

              <FaTwitter className="cursor-pointer hover:text-white" />

              <FaLinkedin className="cursor-pointer hover:text-white" />

            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm">
          © {new Date().getFullYear()} ShopSphere.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;