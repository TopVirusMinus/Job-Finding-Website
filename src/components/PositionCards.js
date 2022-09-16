import PositionCard from "./PositionCard/PostitionCard";
import {RiBuildingLine} from "react-icons/ri"
import {BsBook} from "react-icons/bs"
import {GoGraph} from "react-icons/go"
import {TbHeartbeat} from "react-icons/tb"
import {TbCar} from "react-icons/tb"
import {BsKeyboard} from "react-icons/bs"

const PositionCards = () => {
  return (
    <div class="container mt-3">
      <div class="col-8">
        <div class="row">
          <div class="col border">
            <PositionCard
              title="Construction & Build"
              subtitle="7 Open Positions"
            >
              <RiBuildingLine size={50} />
            </PositionCard>
          </div>
          <div class="col border">
            <PositionCard
              title="Education & Training"
              subtitle="32 Open Positions"
            >
              <BsBook size={50} />
            </PositionCard>
          </div>
          <div class="col border">
            <PositionCard
              title="Accounting & Finance"
              subtitle="0 Open Positions"
            >
              <GoGraph size={50} />
            </PositionCard>
          </div>
        </div>
        <div class="row ">
          <div class="col border">
            <PositionCard
              title="Healthcare & Beauty"
              subtitle="2 Open Positions"
            >
              <TbHeartbeat size={50} />
            </PositionCard>
          </div>
          <div class="col border">
            <PositionCard title="Cars & Automotive" subtitle="9 Open Positions">
              <TbCar size={50} />
            </PositionCard>
          </div>
          <div class="col border">
            <PositionCard title="Web Development" subtitle="8 Open Positions">
              <BsKeyboard size={50} />
            </PositionCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionCards;
