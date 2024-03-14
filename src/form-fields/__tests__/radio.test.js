import { render, screen } from '@testing-library/react';
import { FORM_FIELD_TYPE } from '../../../constant';
import Radio from '../radio/radio';

describe('Radio Component', () => {
  it('Radio testCase', () => {
    const field = {
      id: 'test-radio',
      type: FORM_FIELD_TYPE.CHECKBOX,
      labelText: 'Radio Test'
    };
    render(<Radio field={field} />);
    const checkRadio = screen.getByRole('radio');
    const checkRadioLabel = screen.getByText('Radio Test');
    expect(checkRadio).toBeInTheDocument();
    expect(checkRadioLabel).toBeInTheDocument();
  });
});
