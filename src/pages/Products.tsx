import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Filter, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import productKit from "@/assets/product-kit.jpg";
import chassisDesign from "@/assets/chassis-design.jpg";
import robotCar from "@/assets/robot-car.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Starter Robot Kit",
      price: "PKR 8,500",
      originalPrice: "PKR 10,000",
      image: productKit,
      category: "Kits",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 45,
      description:
        "Complete beginner-friendly kit with Arduino Uno, motors, sensors, and custom acrylic chassis.",
      features: ["Arduino Uno R3", "4x DC Motors", "L298N Motor Driver", "Custom Acrylic Chassis", "IR Sensors", "Complete Wiring Kit"],
    },
    {
      id: 2,
      name: "Custom Chassis Pack",
      price: "PKR 3,500",
      image: chassisDesign,
      category: "Components",
      rating: 4.9,
      reviews: 32,
      description:
        "Precision laser-cut acrylic chassis pieces for building custom robots.",
      features: ["3mm Acrylic Material", "Precision Laser-Cut", "Multiple Mounting Holes", "Hardware Included", "Custom Sizes Available"],
    },
    {
      id: 3,
      name: "Smart Line Follower",
      price: "PKR 12,000",
      image: robotCar,
      category: "Kits",
      badge: "New",
      rating: 4.7,
      reviews: 28,
      description:
        "Advanced autonomous robot with line following and obstacle avoidance.",
      features: ["ESP32 Brain", "5x IR Sensors", "Ultrasonic Sensor", "OLED Display", "Rechargeable Battery", "Bluetooth Control"],
    },
    {
      id: 4,
      name: "Arduino Mega Kit",
      price: "PKR 15,000",
      image: productKit,
      category: "Kits",
      rating: 4.6,
      reviews: 19,
      description:
        "Professional-grade kit with Arduino Mega for complex robotics projects.",
      features: ["Arduino Mega 2560", "Servo Motors", "Stepper Motors", "LCD Display", "Multiple Sensors", "Extended GPIO"],
    },
    {
      id: 5,
      name: "Bluetooth Robot Car",
      price: "PKR 9,500",
      image: robotCar,
      category: "Kits",
      badge: "Popular",
      rating: 4.8,
      reviews: 56,
      description:
        "Smartphone-controlled robot car with Bluetooth connectivity.",
      features: ["HC-05 Bluetooth", "Android App", "4WD Drive", "Speed Control", "Custom Chassis", "Battery Included"],
    },
    {
      id: 6,
      name: "Sensor Bundle Pack",
      price: "PKR 4,500",
      image: chassisDesign,
      category: "Components",
      rating: 4.5,
      reviews: 23,
      description:
        "Essential sensor collection for robotics and automation projects.",
      features: ["Ultrasonic Sensor", "IR Sensors x5", "Temperature Sensor", "Light Sensor", "PIR Motion Sensor", "Sound Sensor"],
    },
  ];

  const categories = ["All", "Kits", "Components", "Accessories"];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Products"
            title="Robotic Kits & Components"
            description="Browse our collection of quality robotic kits and components, all sourced locally in Pakistan."
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`font-medium ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
            <Button variant="outline" className="border-border text-muted-foreground">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-industrial overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                      {product.badge}
                    </Badge>
                  )}
                  
                  <Badge
                    variant="outline"
                    className="absolute top-4 right-4 bg-background/80 border-border"
                  >
                    {product.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="font-orbitron font-semibold text-lg mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded text-primary">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="font-orbitron text-xl text-accent font-bold">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground text-sm line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link to="/contact">
                      <Button size="sm" className="btn-primary-glow">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Order
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="bottom-0" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We specialize in custom robotic solutions. Tell us your requirements
            and we'll create a tailored kit just for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary-glow font-orbitron">
              Request Custom Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
