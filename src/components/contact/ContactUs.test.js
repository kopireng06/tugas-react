import { render,screen,fireEvent } from "@testing-library/react";
import ContactUs from './ContactUs.js';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../app_contact/store';

const ContactUsComp = ()=>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <ContactUs/>
            </BrowserRouter>
        </Provider>
    )
}

test("mencoba form",()=>{
    render(<ContactUsComp/>);
    fireEvent.input(screen.getByPlaceholderText("Your Full Name Here...", { name: /name/i}), {
        target: { value: '6767676' },
    });
    fireEvent.input(screen.getByPlaceholderText("example@domail.com", { name: /email/i }), {
        target: { value: 'Dr Hahaha' },
    });
    fireEvent.input(screen.getByPlaceholderText("08573890xxxxx", { name: /phone/i }), {
        target: { value: 'asasasa' },
    });
    expect(screen.getByPlaceholderText("Your Full Name Here...")).toHaveValue('6767676');
    expect(screen.getByPlaceholderText("example@domail.com")).toHaveValue('Dr Hahaha');
    expect(screen.getByPlaceholderText("08573890xxxxx")).toHaveValue('asasasa');
});

test("mencoba mengisi salah",()=>{
    render(<ContactUsComp/>);
    fireEvent.input(screen.getByPlaceholderText("Your Full Name Here...", { name: /name/i}), {
        target: { value: '6767676' },
    });
    fireEvent.input(screen.getByPlaceholderText("example@domail.com", { name: /email/i }), {
        target: { value: 'Dr Hahaha' },
    });
    fireEvent.input(screen.getByPlaceholderText("08573890xxxxx", { name: /phone/i }), {
        target: { value: 'asasasa' },
    });
    fireEvent.click(screen.getByText("Submit"))
    expect(screen.getByText("Full name cannot be empty")).toBeInTheDocument();
    expect(screen.getByText("Email cannot be empty")).toBeInTheDocument();
    expect(screen.getByText("Phone number cannot be empty")).toBeInTheDocument();
})

test("mencoba mengisi kosong",()=>{
    render(<ContactUsComp/>);
    fireEvent.click(screen.getByText("Submit"))
    expect(screen.getByText("Full name cannot be empty")).toBeInTheDocument();
    expect(screen.getByText("Email cannot be empty")).toBeInTheDocument();
    expect(screen.getByText("Phone number cannot be empty")).toBeInTheDocument();
})

test("tes apakah component ter render atau tidak",()=>{
    render(<ContactUsComp/>);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
})

test("tes apakah nationality sudah punya nilai default",()=>{
    render(<ContactUsComp/>);
    expect(screen.getByText("Indonesia")).toBeInTheDocument();
});




