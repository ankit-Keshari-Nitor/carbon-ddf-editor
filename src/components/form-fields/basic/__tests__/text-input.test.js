import { render, screen } from "@testing-library/react";
import TextInput from "../text-input/text-input";


test('Input textBox testCase',()=>{
    const field = { id:'test-text-input', type: 'textinput', labelText:'Text Input TestCase' }
    render(<TextInput field={field}/>);
    const checkInputText = screen.getByRole("textbox");
    const checkInputTextLabel = screen.getByText("Text Input TestCase");
    expect(checkInputText).toBeInTheDocument();
    expect(checkInputTextLabel).toBeInTheDocument();
})
