import { useState } from "react";
import { Form } from "./Form";
import { Table } from "./table/Table";
// import dataResult from '../data/datos.json';
import useAnalyzer from "../hooks/useAnalyzer";
import PropTypes from "prop-types";

export const MethodPage = ({title, processor}) => {
  const [data, setData] = useState({});
  const result = useAnalyzer(data, processor);

  return (
    <>
        <h2> { title } </h2>

        <Form onNewData={setData}/>

        <Table result={ result }/>
    </>
  )
}

MethodPage.propTypes = {
  title: PropTypes.string,
  processor: PropTypes.func.isRequired
} 