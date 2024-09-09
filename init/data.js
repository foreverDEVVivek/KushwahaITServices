const serviceCards = [
  {
    icon: ["fa-solid","fa-cloud"],
    title: "Cloud Computing",
    description: "Reliable and scalable cloud solutions to meet your business needs.",
    features: ["High Availability", "Cost Efficiency", "Secure Infrastructure", "Scalable Resources"],
    cta: {
      text: "Explore Cloud Services",
      link: "/services/cloud-computing"
    },
    price: "$199/month",
    createdAt: new Date("2024-09-01T00:00:00Z")
  },
  {
    icon: ["fa-solid","fa-user-secret"],
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your digital assets.",
    features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Firewall Protection"],
    cta: {
      text: "Secure Your Business",
      link: "/services/cybersecurity"
    },
    price: "Custom Pricing",
    createdAt: new Date("2024-09-02T00:00:00Z")
  },
  {
    icon: ["fa-solid","fa-chart-line"],
    title: "Data Analytics",
    description: "Gain insights with our data analytics services.",
    features: ["Data Visualization", "Predictive Analytics", "Real-time Reporting", "Data Warehousing"],
    cta: {
      text: "Learn More",
      link: "/services/data-analytics"
    },
    price: "$299/month",
    createdAt: new Date("2024-09-03T00:00:00Z")
  },
  {
    icon: ["fa-solid","fa-globe"],
    title: "Web Development",
    description: "Full-stack web development tailored to your needs.",
    features: ["Responsive Design", "SEO Optimization", "E-commerce Integration", "Custom Backend Solutions"],
    cta: {
      text: "Build Your Website",
      link: "/services/web-development"
    },
    price: "$1500/project",
    createdAt: new Date("2024-09-04T00:00:00Z")
  },
  {
    icon: ["fa-solid","fa-phone"],
    title: "IT Support",
    description: "Comprehensive IT support services for businesses.",
    features: ["24/7 Remote Assistance", "On-Site Support", "Proactive Monitoring", "System Maintenance"],
    cta: {
      text: "Get Support",
      link: "/services/it-support"
    },
    price: "$99/month",
    createdAt: new Date("2024-09-05T00:00:00Z")
  },
  {
    icon: ["fa-brands","fa-figma"],
    title: "App Development",
    description: "Comprehensive IT support services for businesses.",
    features: ["24/7 Remote Assistance", "On-Site Support", "Proactive Monitoring", "System Maintenance"],
    cta: {
      text: "Get Support",
      link: "/services/it-support"
    },
    price: "$99/month",
    createdAt: new Date("2024-09-05T00:00:00Z")
  }
];

// Example of inserting into MongoDB (assuming you have a ServiceCard model set up)
// const ServiceCard = require('./path-to-your-model'); // Adjust the path accordingly
// ServiceCard.insertMany(serviceCards)
//   .then(() => console.log("Sample data inserted successfully"))
//   .catch(err => console.error("Error inserting sample data:", err));


module.exports={ data: serviceCards }