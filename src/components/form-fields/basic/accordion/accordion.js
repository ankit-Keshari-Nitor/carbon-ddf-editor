import * as React from "react";
import { AccordionItem, Accordion as CarbonAccordion } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.ACCORDION;

const Accordion = (props) => {
  const { field, ...rest } = props;

  return (
    <CarbonAccordion id={field.id} {...rest}>
      <AccordionItem title={field.labelText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
    </CarbonAccordion>
  );
};

export default Accordion;

// Config of Accordion for Left Palette & Right Palette
Accordion.config = {
  type,
  label: "Accordion",
  group: "panel",
  editableProps: editableProps,
  advanceProps: {},
};
