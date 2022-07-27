import { render, screen } from "@testing-library/react"
import { TableBody } from "../../../components/table/TableBody"
import dataResult from '../../../data/datos.json';

describe('test of table body', () => { 

    test('should match the snapshot', () => { 
        render( <TableBody result={ dataResult['datos'] } /> );
        expect(screen).toMatchSnapshot();
    })

})