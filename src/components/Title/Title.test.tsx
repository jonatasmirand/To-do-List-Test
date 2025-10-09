import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from ".";

test("Reinderiza o título com o texto correto", async() => {
    const titulo = "Titulo";

    render(<Title title={titulo}/>);

    const elemento = await screen.findByText(titulo);

    expect(elemento).toBeInTheDocument();
})