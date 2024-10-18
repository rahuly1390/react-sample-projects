import { render, screen } from "@testing-library/react"
import { Languages } from "./Languages"
import user from "@testing-library/user-event";

describe('Languages Component',()=>{
    const langs = ['HTML','CSS','Javascript','React']
    test('render correctly',()=>{
        render(<Languages languages={langs}/>);
        const list = screen.getByRole("list");//ul,ol
        expect(list).toBeInTheDocument();
    })

    test('list count',() =>{
        render(<Languages languages={langs}/>);
        const list = screen.getAllByRole("listitem");//li
        expect(list).toHaveLength(langs.length);
    })

    test('render login button',()=>{
        render(<Languages languages={langs}/>);
        const button = screen.getByRole("button",{
            name:'Login'
        });//ul,ol
        expect(button).toBeInTheDocument();
    })

    test('click login button',async ()=>{
        user.setup();
        render(<Languages languages={langs}/>);
        const loginBtn = screen.getByRole("button",{
            name:'Login'
        });//ul,ol
        expect(loginBtn).toBeInTheDocument();
        //Click
        await user.click(loginBtn);
        const startCourseBtn = screen.getByRole("button",{
            name:'Start Course'
        });//ul,ol
        expect(startCourseBtn).toBeInTheDocument();
    })

    test("Start Course button is not rendered", () => {
        render(<Languages languages={langs} />);
        const startCourseBtn = screen.queryByRole("button", {
            name: "Start Course"
        });
        expect(startCourseBtn).not.toBeInTheDocument();
    })
 
    test("Start Course button is displayed", async () => {
        render(<Languages languages={langs} />);
        const startCourseBtn = await screen.findByRole("button", {
            name: "Start Course"
        }, {timeout: 3000});
        expect(startCourseBtn).toBeInTheDocument();
    })

})