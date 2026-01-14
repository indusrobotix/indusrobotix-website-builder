import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cog,
  Box,
  Wrench,
  BookOpen,
  Lightbulb,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "Custom Robotic Kits",
      description:
        "We design and assemble complete robotic kits tailored to your specific requirements. From educational kits to advanced prototypes.",
      features: [
        "Requirement analysis",
        "Component selection",
        "Custom assembly",
        "Quality testing",
        "Documentation included",
      ],
      price: "Starting from PKR 8,000",
    },
    {
      icon: Cog,
      title: "Acrylic Chassis Design",
      description:
        "Precision laser-cut acrylic chassis designed in-house. We can create custom designs based on your CAD files or sketches.",
      features: [
        "Custom CAD design",
        "Laser cutting service",
        "3mm/5mm acrylic options",
        "Hardware included",
        "Quick turnaround",
      ],
      price: "Starting from PKR 2,500",
    },
    {
      icon: Wrench,
      title: "Component Assembly",
      description:
        "Professional assembly service for your robotic projects. We handle soldering, wiring, and integration of all components.",
      features: [
        "Professional soldering",
        "Wiring & integration",
        "Motor mounting",
        "Sensor installation",
        "Testing & calibration",
      ],
      price: "Starting from PKR 3,000",
    },
    {
      icon: BookOpen,
      title: "STEM Workshops",
      description:
        "Educational robotics workshops for schools and institutions. We bring hands-on learning to students across Pakistan.",
      features: [
        "Age-appropriate content",
        "Hands-on projects",
        "Take-home kits",
        "Trained instructors",
        "Certificates provided",
      ],
      price: "Contact for pricing",
    },
    {
      icon: Lightbulb,
      title: "Prototype Development",
      description:
        "Turn your ideas into working prototypes. We help entrepreneurs and researchers bring their robotic concepts to life.",
      features: [
        "Concept validation",
        "Design iteration",
        "Functional prototype",
        "Testing & refinement",
        "Documentation",
      ],
      price: "Custom quote",
    },
    {
      icon: Headphones,
      title: "Technical Consultation",
      description:
        "Expert guidance on robotics projects, component selection, and troubleshooting for individuals and businesses.",
      features: [
        "Project planning",
        "Component recommendations",
        "Troubleshooting support",
        "Remote assistance",
        "Follow-up support",
      ],
      price: "PKR 2,000/hour",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Share your requirements and we'll discuss the best approach.",
    },
    {
      step: "02",
      title: "Design",
      description: "We create designs and select optimal components for your project.",
    },
    {
      step: "03",
      title: "Assembly",
      description: "Expert assembly with precision and quality control.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Testing, packaging, and delivery to your doorstep.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Services"
            title="Expert Robotics Solutions"
            description="From custom kits to educational workshops, we offer comprehensive robotics services for Pakistan's innovators."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-industrial p-8 group hover:border-primary transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-orbitron font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="font-orbitron text-accent font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="top-10" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="How We Work"
            title="Our Process"
            description="A streamlined approach to deliver quality robotic solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-orbitron font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Get in touch with us today and let's discuss how we can help bring
            your robotics vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary-glow font-orbitron">
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
