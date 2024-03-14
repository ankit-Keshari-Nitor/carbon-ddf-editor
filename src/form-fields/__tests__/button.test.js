import { render, screen } from '@testing-library/react';
import { FORM_FIELD_TYPE } from '../../../constant';
import Button from '../button/button';

describe('Button Component', () => {
  it('Button testCase', () => {
    const field = {
      id: 'test-button',
      type: FORM_FIELD_TYPE.BUTTON,
      labelText: 'Button Test'
    };
    render(<Button field={field} />);
    const checkButton = screen.getByRole('button');
    const checkButtonLabel = screen.getByText('Button Test');
    expect(checkButton).toBeInTheDocument();
    expect(checkButtonLabel).toBeInTheDocument();
  });
});
