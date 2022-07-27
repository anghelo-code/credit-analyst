import { render, screen } from "@testing-library/react";
import { Table } from "../../../components/table/Table";
import dataResult from '../../../data/datos.json';

describe('test of table body', () => { 

    test('should match the snapshot', () => { 
        const { container} = render( <Table result={ dataResult['datos'] } /> );
        expect(container).toMatchSnapshot();
    })

})