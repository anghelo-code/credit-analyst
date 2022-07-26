import { useState } from "react";
import { Form } from "./Form";
import { Table } from "./table/Table";
// import dataResult from '../data/datos.json';
import useAnalyzer from "../hooks/useAnalyzer";

export const MethodPage = ({title, processor}) => {
  const [data, setData] = useState({});

  const result = useAnalyzer(data, processor);

  return (
    <>
        <h2> { title } </h2>

        {/*  formulario  */}
        <Form onNewData={setData}/>

        {/*  tabla  */}
        
        {/* <Table result={ dataResult.datos }/> */}

        <Table result={ result }/>
    </>
  )
}