import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("Greet test is available on screen!", () => {
    render(<Greet />);
    const greetTextElement = screen.getByText("Greet");
    expect(greetTextElement).toBeInTheDocument();
})