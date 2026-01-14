// ============================================
// PRODUCTS DATA
// Edit this file to add, remove, or update products
// ============================================

import productKit from "@/assets/product-kit.jpg";
import chassisDesign from "@/assets/chassis-design.jpg";
import robotCar from "@/assets/robot-car.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // For showing discounts
  image: string;
  category: "kits" | "components" | "chassis" | "accessories";
  badge?: string; // e.g., "Best Seller", "New", "Limited"
  rating: number; // 1-5
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "module-1",
    name: "2WD ALPHA MODULE I",
    description: "Perfect for beginners. Includes our signature 2WD acrylic chassis, High torque motors with tyres, Caster wheel, Screws & Nuts, Mountings for motor, Cell holder and Special gift.",
    price: 1300,
    originalPrice: 1450,
    image: productKit,
    category: "Alpha",
    badge: "Best Seller",
    rating: 4,
    features: ["Caster Wheel", "2 DC Motors", "Cell Holder", "Nuts & Mountings", "Special Gift", "Custom Chassis", "Assembly Guide"],
    inStock: true,
  },
  {
    id: "moduel-2",
    name: "2WD ALPHA MODULE II (Obstacle Avoidance)",
    description: "For experienced builders. Advanced sensors, and modular chassis design.",
    price: 3450,
    originalPrice:3800
    image: chassisDesign,
    category: "Alpha",
    badge: "Popular",
    rating: 4.2,
    features: ["Arduin UNO", "2 DC Motors", "Ultrasonic Sensors", "Cell Holder", "Premium Chassis"],
    inStock: true,
  },
  {
    id: "line-follower",
    name: "Line Follower Robot",
    description: "Ready-to-assemble line following robot with pre-programmed Arduino and IR sensor array.",
    price: 6500,
    image: robotCar,
    category: "kits",
    rating: 4,
    features: ["Pre-programmed", "5 IR Sensors", "Speed Control", "Battery Included"],
    inStock: true,
  },
  {
    id: "motor-pack",
    name: "DC Motor Pack (4 pcs)",
    description: "High-quality 6V DC motors with gear reduction. Perfect for robot cars and projects.",
    price: 1200,
    image: productKit,
    category: "components",
    rating: 4,
    features: ["6V Operation", "Gear Reduction", "High Torque", "Mounting Brackets"],
    inStock: true,
  },
  {
    id: "sensor-bundle",
    name: "Sensor Bundle Pack",
    description: "Complete sensor kit including ultrasonic, IR, temperature, and motion sensors.",
    price: 2500,
    image: chassisDesign,
    category: "components",
    badge: "Value Pack",
    rating: 5,
    features: ["Ultrasonic Sensor", "IR Sensors x5", "Temperature Sensor", "PIR Motion"],
    inStock: true,
  },
  {
    id: "custom-chassis-small",
    name: "Custom Acrylic Chassis - Small",
    description: "Precision-cut acrylic chassis for small robots. Durable and lightweight.",
    price: 1500,
    image: robotCar,
    category: "chassis",
    rating: 4,
    features: ["3mm Acrylic", "Laser Cut", "Mounting Holes", "Hardware Included"],
    inStock: true,
  },
  {
    id: "custom-chassis-large",
    name: "Custom Acrylic Chassis - Large",
    description: "Heavy-duty acrylic chassis for larger robots and competition builds.",
    price: 2800,
    image: chassisDesign,
    category: "chassis",
    badge: "Premium",
    rating: 5,
    features: ["5mm Acrylic", "Laser Cut", "Multi-layer Design", "All Hardware"],
    inStock: true,
  },
  {
    id: "tool-kit",
    name: "Robotics Tool Kit",
    description: "Essential tools for robot building including screwdrivers, pliers, and soldering iron.",
    price: 3500,
    image: productKit,
    category: "accessories",
    rating: 4,
    features: ["Soldering Iron", "Screwdriver Set", "Wire Cutters", "Multimeter"],
    inStock: false,
  },
];

// Product categories for filtering
export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "kits", name: "Complete Kits" },
  { id: "components", name: "Components" },
  { id: "chassis", name: "Chassis" },
  { id: "accessories", name: "Accessories" },
];

// Currency formatting helper
export const formatPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString()}`;
};
