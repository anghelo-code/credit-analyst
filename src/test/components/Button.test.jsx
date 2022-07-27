import { render, screen } from "@testing-library/react"
import { Button } from "../../components/Button"

describe('test of button', () => { 

    const url = '/MetodoFrances';
    const title = 'Hola soy goku';

    test('should first', () => { 
        // render( < Button link={ url } title={ title } /> );
        // expect( screen.getByRole('link').to ).toBe(url);
    })

    test('should first', () => { 
        // render( < Button link={ url } title={ title } /> );
        // expect( screen.getByText(title).toBeTruthy());
    })
})