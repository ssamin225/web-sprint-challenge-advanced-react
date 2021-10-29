import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const fname = screen.getByLabelText(/first name:/i);
    const lname = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const submitBtn = screen.getByRole('button');

    userEvent.type(fname, 'John');
    userEvent.type(lname, 'abcd');
    userEvent.type(address, '123 Lambda Street');
    userEvent.type(city, 'West Palm Beach');
    userEvent.type(state, 'Florida');
    userEvent.type(zip, '33257');
    userEvent.click(submitBtn);

    const successMessage = await screen.findByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
});
