
import { render,screen } from "@testing-library/react";
import Form from "./Form";

describe('Form Component', () =>{
    test('render correctly',()=>{
        render(<Form/>);
        const h1 = screen.getByRole("heading",{
            level:1
        });
        expect(h1).toBeInTheDocument();
        const nameTextBox = screen.getByRole("textbox",
        {
            name:"Name"
        });
        expect(nameTextBox).toBeInTheDocument();

        const labelName = screen.getByLabelText("Name",{
            selector:"input"
        });
        expect(labelName).toBeInTheDocument();

        const descTextArea = screen.getByRole("textbox",
            {
                name:"Description"
            });

        expect(descTextArea).toBeInTheDocument();

        const para = screen.getByText("Fill up all your basic information");
        expect(para).toBeInTheDocument();

        const namePlaceholder = screen.getByPlaceholderText("Enter Name");
        expect(namePlaceholder).toBeInTheDocument();

        // const image = screen.getAllByAltText("Random women image");
        // expect(image).toBeInTheDocument();
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();

        const span = screen.getByTitle("open");
        expect(span).toBeInTheDocument();

        const locationDDL = screen.getByRole("combobox");
        expect(locationDDL).toBeInTheDocument();
        const termsCheckbox = screen.getByRole("checkbox");
        expect(termsCheckbox).toBeInTheDocument();
        const btnSubmit = screen.getByRole("button");
        expect(btnSubmit).toBeInTheDocument();
    })
})