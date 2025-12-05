import "./Location.css";
import LocationCard from "./LocationCard.jsx";
import { GiRiver } from "react-icons/gi";
import { MdOutlineKitchen } from "react-icons/md";
import { TbBeach, TbCar, TbBed, TbUsers } from "react-icons/tb";
function Location() {
  return (
    <section className="location" id="location">
      <h5>Location</h5>
      <h1>What makes us different</h1>
      <div className="location-cards">
        <LocationCard
          icon={GiRiver}
          title="Prime River Location"
          heading="Location"
          description="Enjoy stunning river-front views while staying right in the heart of Weligama city."
        />
        <LocationCard
          icon={TbBeach}
          title="Walk to the beach"
          heading="Nearby Attractions"
          description="Weligama Beach is just a few minutes away on foot — perfect for surfing, sunsets, and relaxation."
        />
        <LocationCard
          icon={TbCar}
          title="Easy Transport Access"
          heading="Convenience"
          description="Close to bus stops, the train station, and taxi routes for smooth, hassle-free travel."
        />
        <LocationCard
          icon={MdOutlineKitchen}
          title="In-Room Kitchen"
          heading="Facilities"
          description="Every room includes a fully equipped kitchen for comfortable and flexible self-catering stays."
        />
        <LocationCard
          icon={TbBed}
          title="Room Options for Everyone"
          heading="Accommodation"
          description="Choose from AC rooms, non-AC rooms, or spacious family suites to match your needs and budget."
        />
        <LocationCard
          icon={TbUsers}
          title="24/7 Customer Service"
          heading="Hospitality"
          description="Our friendly staff are available around the clock to assist you whenever you need."
        />
      </div>
    </section>
  );
}
export default Location;
