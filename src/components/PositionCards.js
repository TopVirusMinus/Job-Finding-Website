import PositionCard from "./PositionCard/PostitionCard";
import { RiBuildingLine } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { TbHeartbeat } from "react-icons/tb";
import { TbCar } from "react-icons/tb";
import { BsKeyboard } from "react-icons/bs";

const PositionCards = () => {
  return (
    <div className="row mt-3 gx-5 ">
      <div className="col-8">
        <div class="container shadow-sm">
          <div class="row">
            <div class="col border border-light">
              <PositionCard
                title="Construction & Build"
                subtitle="7 Open Positions"
              >
                <RiBuildingLine color="#7c5295" size={50} />
              </PositionCard>
            </div>
            <div class="col border-light">
              <PositionCard
                title="Education & Training"
                subtitle="32 Open Positions"
              >
                <BsBook color="#7c5295" size={50} />
              </PositionCard>
            </div>
            <div class="col border-light">
              <PositionCard
                title="Accounting & Finance"
                subtitle="0 Open Positions"
              >
                <GoGraph color="#7c5295" size={50} />
              </PositionCard>
            </div>
          </div>
          <div class="row ">
            <div class="col border-light">
              <PositionCard
                title="Healthcare & Beauty"
                subtitle="2 Open Positions"
              >
                <TbHeartbeat color="#7c5295" size={50} />
              </PositionCard>
            </div>
            <div class="col border-light">
              <PositionCard
                title="Cars & Automotive"
                subtitle="9 Open Positions"
              >
                <TbCar color="#7c5295" size={50} />
              </PositionCard>
            </div>
            <div class="col border-light">
              <PositionCard title="Web Development" subtitle="8 Open Positions">
                <BsKeyboard color="#7c5295" size={50} />
              </PositionCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionCards;
