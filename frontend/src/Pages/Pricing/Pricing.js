import React from "react";
import "./Pricing.scss";
import { IOSSwitch } from "../../components/switches/IOSswitch";
import { Stack, Button } from "@mui/material";
const pricingCards = [
  {
    heading: "Basic",
    price: "Free",
    usageAmount: "",
    actionValue: "Start Now",
    details: ["Mentorships", "Unlimited Sessions", "Community Access"],
  },
  {
    heading: "Gold",
    price: "2500",
    usageAmount: "per user, per month",
    actionValue: "Start My 15-day Trial",
    details: [
      "Mentorship",
      "Unlimited Sessions",
      "Community Access",
      "Personal Supervisor",
      "Personal Counsellor",
    ],
  },
  {
    heading: "Premium",
    price: "3000",
    usageAmount: "per user, per month",
    actionValue: "Start My 15-day Trial",
    details: [
      "Mentorships",
      "Unlimited Sessions",
      "Community Access",
      "Personal Supervisor/Counsellor",
      "Free Resources",
    ],
  },
];
const Pricing = () => {
  return (
    <div className="pricingContainer">
      <h2>
        Looking forward to building your skills? Let’s get you matched up with a
        mentor!
      </h2>
      <div className="types">
        <span>
          <i class="fa-solid fa-check"></i> Mentorship
        </span>
        <span>
          <i class="fa-solid fa-check"></i> Step-by-Step Career Plan
        </span>
        <span>
          <i class="fa-solid fa-check"></i> Cancel Anytime
        </span>
      </div>
      <Stack
        className="billingType"
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <p>Billed Monthly</p>
        <span>
          <IOSSwitch />
        </span>
        <p>Billed Yearly</p>
      </Stack>
      <Stack direction="row" spacing={2}>
        {pricingCards.map((card, index) => {
          <Stack direction="column" alignItems="center" key={index}>
            <p>{card.heading}</p>
            <h2>{card.price}</h2>
            <Button variant="contained">{card.actionValue}</Button>
            <hr />
            <Stack direction="column" alignItems="center" key={index}>
              {card.details.map((detail, index) => {
                <p>detail</p>;
              })}
            </Stack>
          </Stack>;
        })}
      </Stack>
    </div>
  );
};

export default Pricing;
