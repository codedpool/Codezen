import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import MutualFundDashboard from "./components/Dashboard/MutualFundDashboard";
import CoinContextProvider from "./context/CoinContext";
import CryptoDashboard from "./components/CryptoDashboard/App";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0

// Callback Component
const Callback = () => {
  const { isLoading, error } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  window.location.replace("/"); // Redirect to home after login
  return null;
};

// Home Page Component
const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const Dashboard = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Routes>
      <Route path="/stocks" element={<div className={`${styles.paddingY} ${styles.flexCenter} text-white`}>Stock Market Dashboard (To Be Developed)</div>} />
      <Route path="/mutual-funds" element={<MutualFundDashboard />} />
      <Route path="/crypto/*" element={<CryptoDashboard />} />
    </Routes>
  </div>
);

// App Component with Routing
const App = () => (
  <Router>
    <CoinContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/callback" element={<Callback />} /> {/* Add Callback Route */}
      </Routes>
    </CoinContextProvider>
  </Router>
);

export default App;