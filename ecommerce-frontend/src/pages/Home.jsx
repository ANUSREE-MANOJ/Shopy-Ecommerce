import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import products from "../assets/product";
import { Link } from "react-router-dom";

function Home() {
    const featuredProducts = products.slice(0, 6);

  return (
    <div>

      <HeroSlider />
       <section className="max-w-7xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            View All Products
          </Link>
        </div>

      </section>


       
    </div>

  );
}

export default Home;