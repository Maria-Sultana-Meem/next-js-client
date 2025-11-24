import Banner from "@/components/Banner"; 
import Feature from "@/components/Feature"; 
import Testimonials from "@/components/Testimonials"; 
import Products from "@/components/Products"; 

export default function HomePage() {
      
  return (
    <main>
      {/* Banner / Hero Section */}
      <Banner />
      <Products></Products>
      <Feature></Feature>
      <Testimonials></Testimonials>

      
      
    </main>
  );
}
