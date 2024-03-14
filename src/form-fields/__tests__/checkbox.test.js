import { render, screen } from '@testing-library/react';
import { FORM_FIELD_TYPE } from '../../../constant';
import Checkbox from '../checkbox/checkbox';

describe('Checkbox Component', () => {
  it('Checkbox testCase', () => {
    const field = {
      id: 'test-checkbox',
      type: FORM_FIELD_TYPE.CHECKBOX,
      labelText: 'Checkbox Test'
    };
    render(<Checkbox field={field} />);
    const checkCheckbox = screen.getByRole('checkbox');
    const checkCheckboxLabel = screen.getByText('Checkbox Test');
    expect(checkCheckbox).toBeInTheDocument();
    expect(checkCheckboxLabel).toBeInTheDocument();
  });
});
