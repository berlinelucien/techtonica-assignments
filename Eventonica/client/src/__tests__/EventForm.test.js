import { render, screen } from '@testing-library/react';
import EventForm from '../components/EventForm';


describe("EventForm", () => {
    test("should render Events component", () => {
      render(<EventForm />);
  
    });
  });