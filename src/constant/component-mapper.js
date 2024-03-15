import { componentTypes } from '@data-driven-forms/react-form-renderer';
import TextInput from '../form-fields/text-input';
import TextArea from '../form-fields/textarea';
import RadioButton from '../form-fields/radio';
import ToggleButton from '../form-fields/toggle-button';
import Select from '../form-fields/select';
import Checkbox from '../form-fields/checkbox';
import DatePicker from '../form-fields/datepicker';
import Button from '../form-fields/button';
import Accordion from '../form-fields/accordion';
import FileUploader from '../form-fields/file-upload';
import Link from '../form-fields/link';
import NumberInput from '../form-fields/number';
import Password from '../form-fields/password';

export const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextInput,
  [componentTypes.TEXTAREA]: TextArea,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.RADIO]: RadioButton,
  [componentTypes.DATE_PICKER]: DatePicker,
  [componentTypes.BUTTON]: Button,
  ['custom-file-updload']: FileUploader,
  ['custom-accordion']: Accordion,
  ['custom-toggle']: ToggleButton,
  ['custom-link']: Link,
  ['custom-number']: NumberInput,
  ['custom-password']: Password
};
