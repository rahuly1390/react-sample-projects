import { render,screen } from "@testing-library/react";
import Count from "./Count";
import user from "@testing-library/user-event";

describe('count component',() =>{
    test("renders correctly", () => {
        render(<Count />);
        const countElem = screen.getByRole("heading");
        expect(countElem).toBeInTheDocument();
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementBtn).toBeInTheDocument();
    })

    test("renders count as 0", () => {
        render(<Count />);
        const countElem = screen.getByRole('heading');
        expect(countElem).toHaveTextContent('0');
    })

    test("renders a count of 1, after Increment button Clicked", async () => {
        user.setup();
        render(<Count />);
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementBtn).toBeInTheDocument();
        await user.click(incrementBtn);

        const countElem = screen.getByRole('heading');
        expect(countElem).toHaveTextContent('1');
    })

    test("render a count of 10 after clicking Set button", async () => {
        user.setup();
        render(<Count />);
        const amtInput = screen.getByRole('spinbutton');
        await user.type(amtInput, '10');
        expect(amtInput).toHaveValue(10);
        const setBtn = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setBtn);
        const countElem = screen.getByRole("heading");
        expect(countElem).toHaveTextContent("10");
    })
})