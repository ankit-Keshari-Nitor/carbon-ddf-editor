import { FORM_FIELD_TYPE } from "./form-field-type";

const INITIAL_SCHEMA = {
  button: {
    type: FORM_FIELD_TYPE.BUTTON,
    label: "Button",
    group: "action",
  },
  textarea: {
    type: FORM_FIELD_TYPE.TEXT_AREA,
    label: "Text Input",
    group: "basic-input",
  },
  textinput: {
    type: FORM_FIELD_TYPE.TEXT_INPUT,
    label: "Text Area",
    group: "basic-input",
  },
  datepicker: {
    type: FORM_FIELD_TYPE.DATEPICKER,
    label: "DatePicker",
    group: "basic-input",
  },
  checkbox: {
    type: FORM_FIELD_TYPE.CHECKBOX,
    label: "Checkbox",
    group: "selection",
  },
  radio: {
    type: FORM_FIELD_TYPE.RADIO,
    label: "Radio Group",
    group: "selection",
  },
  select: {
    type: FORM_FIELD_TYPE.SELECT,
    label: "Select",
    group: "selection",
  },
  numberinput: {
    type: FORM_FIELD_TYPE.NUMBER,
    label: "Number",
    group: "basic-input",
  },
  password: {
    type: FORM_FIELD_TYPE.PASSWORD,
    label: "Password Input",
    group: "basic-input",
  },
  fileUploader: {
    type: FORM_FIELD_TYPE.FILE_UPLOADER,
    label: "File Uploader",
    group: "basic-input",
  },
  accordion: {
    type: FORM_FIELD_TYPE.ACCORDION,
    label: "Accordion",
    group: "panel",
  },
};
