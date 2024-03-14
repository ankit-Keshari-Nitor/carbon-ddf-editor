import { render, screen } from '@testing-library/react';
import TextInput from '../text-input/text-input';
import { FORM_FIELD_TYPE } from '../../../constant';

describe('TextInput Component', () => {
  it('TextInput testCase', () => {
    const field = {
      id: 'test-text-input',
      type: FORM_FIELD_TYPE.TEXT_INPUT,
      labelText: 'Text Input Test'
    };
    render(<TextInput field={field} />);
    const checkInputText = screen.getByRole('textbox');
    const checkInputTextLabel = screen.getByText('Text Input Test');
    expect(checkInputText).toBeInTheDocument();
    expect(checkInputTextLabel).toBeInTheDocument();
  });
});
