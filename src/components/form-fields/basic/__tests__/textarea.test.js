import { render, screen } from "@testing-library/react";
import TextArea from "../textarea/textarea";

test('TextArea testCase',()=>{
    const field = { id:'test-text-area', type: 'textarea', labelText:'Textarea TestCase' }
    render(<TextArea field={field} />);
    const checkTextArea = screen.getByRole("textbox");
    const checkTextAreaLabel = screen.getByText("Textarea TestCase");
    expect(checkTextArea).toBeInTheDocument();
    expect(checkTextAreaLabel).toBeInTheDocument();
})