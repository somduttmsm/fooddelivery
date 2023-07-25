import React, { Fragment } from "react";
import MealsSummary from "./MelasSummary";
import AvailableMelas from "./AvailableMelas";

export default function Meals() {
  return (
    <div>
      <Fragment>
        <MealsSummary />
        <AvailableMelas />
      </Fragment>
    </div>
  );
}
