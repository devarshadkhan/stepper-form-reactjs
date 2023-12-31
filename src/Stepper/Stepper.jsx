import React from "react";
import { useStep } from "react-hooks-helper";
import { Step1 } from "../Step/Step1";
import { Step2 } from "../Step/Step2";
import { Step3 } from "../Step/Step3";



const steps = [{ id: "step1" }, { id: "step2" }, { id: "step3" }];

export const Stepper = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const props = { navigation };
  const { id } = step;

  switch (id) {
    case "step1":
      return <Step1 {...props} />;
    case "step2":
      return <Step2 {...props} />;
    case "step3":
      return <Step3 {...props} />;
    default:
      return <> Error! </>;
  }
};
