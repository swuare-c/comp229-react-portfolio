import { isAuthenticated } from "../../auth/authHelper.js";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    description: "Responsive and modern websites using React and Node.js.",
    image: "/placeholder.jpg",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile apps with React Native.",
    image: "/placeholder.jpg",
  },
  {
    title: "API Integration",
    description: "RESTful API and third-party service integration.",
    image: "/placeholder.jpg",
  },
];

const Services = () => {
  const { user } = isAuthenticated();
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <h1 className="services-header">My Services</h1>

      {user && user.role === "admin" && (
        <button
          className="btn-add-service"
          onClick={() => navigate("/QualificationForm")}
          style={{ marginBottom: "1rem" }}
        >
          Add Service
        </button>
      )}

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
