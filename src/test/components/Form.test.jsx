const { render, screen, fireEvent } = require("@testing-library/react")
const { Form } = require("../../components/Form")

describe('test of the Form', () => { 

    test('should change the value of the text box  ', () => { 

        render( <Form  onNewData={()=> {}}/> );
        const inputPrestamo = screen.getByTestId('prestamo');
        const inputInteres = screen.getByTestId('interes');
        const inputPeriodo = screen.getByTestId('periodo');
        
        fireEvent.input(inputPrestamo, {target: { value: '10000'}});
        fireEvent.input(inputInteres, {target: { value: '20'}});
        fireEvent.input(inputPeriodo, {target: { value: '10'}});

        expect( inputPrestamo.value ).toBe( '10000' );
        expect( inputInteres.value ).toBe( '20' );
        expect( inputPeriodo.value ).toBe( '10' );
    });

    test('should first', () => {
        
        render( <Form  onNewData={()=> {}}/> );
        const inputPrestamo = screen.getByTestId('prestamo');
        const inputInteres = screen.getByTestId('interes');
        const inputPeriodo = screen.getByTestId('periodo');
        const form = screen.getByRole('form');

        fireEvent.input(inputPrestamo, {target: { value: '10000'}});
        fireEvent.input(inputInteres, {target: { value: '20'}});
        fireEvent.input(inputPeriodo, {target: { value: '10'}});
        fireEvent.submit(form);

        expect( inputPrestamo.value ).toBe( '5' );
        expect( inputInteres.value ).toBe( '' );
        expect( inputPeriodo.value ).toBe( '' );
    });

})