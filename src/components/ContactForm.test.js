import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import  userEvent  from '@testing-library/user-event';

test('renders form without errors', () => {
    render(<ContactForm />);
});

test('user can fill out and submit the form', () => {
    render(<ContactForm />);

    const firstnameInput = screen.getByText(/first name/i);
    const lastnameInput = screen.getByText(/last name/i);
    const emailInput = screen.getByText(/email/i);
    const button = screen.getByRole('button', { name: /submit/i });

    userEvent.click(button);
    

})