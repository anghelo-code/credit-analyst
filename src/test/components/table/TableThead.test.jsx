import { render, screen } from "@testing-library/react"
import { TableThead } from "../../../components/table/TableThead"


describe('test of table thead', () => { 

    test('should match the snapshot', () => { 
        render( <TableThead /> );
        expect(screen).toMatchSnapshot();
    })

})