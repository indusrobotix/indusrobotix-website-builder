import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import productKit from "@/assets/product-kit.jpg";
import chassisDesign from "@/assets/chassis-design.jpg";
import robotCar from "@/assets/robot-car.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Robotic Gripper Arm",
      category: "Projects",
    },
    {
      id: 2,
      image: productKit,
      title: "Complete Starter Kit",
      category: "Products",
    },
    {
      id: 3,
      image: gallery2,
      title: "STEM Workshop",
      category: "Workshops",
    },
    {
      id: 4,
      image: chassisDesign,
      title: "Custom Acrylic Chassis",
      category: "Products",
    },
    {
      id: 5,
      image: gallery3,
      title: "Hexapod Walking Robot",
      category: "Projects",
    },
    {
      id: 6,
      image: robotCar,
      title: "Smart Line Follower",
      category: "Products",
    },
  ];

  const categories = ["All", "Products", "Projects", "Workshops"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Work"
            title="Project Gallery"
            description="Explore our collection of completed projects, products, and workshop moments."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="card-industrial overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-primary text-sm font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-orbitron text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="bottom-0" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-orbitron text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </p>
              <p className="text-muted-foreground">Kits Delivered</p>
            </div>
            <div>
              <p className="font-orbitron text-4xl md:text-5xl font-bold text-accent mb-2">
                50+
              </p>
              <p className="text-muted-foreground">School Partners</p>
            </div>
            <div>
              <p className="font-orbitron text-4xl md:text-5xl font-bold text-primary mb-2">
                100+
              </p>
              <p className="text-muted-foreground">Custom Projects</p>
            </div>
            <div>
              <p className="font-orbitron text-4xl md:text-5xl font-bold text-accent mb-2">
                1000+
              </p>
              <p className="text-muted-foreground">Happy Students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
