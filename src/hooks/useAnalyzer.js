import { useEffect, useState } from 'react';

const useAnalyzer = (form, DataProcessing ) => {
    
    const [data, setData] = useState([]);
    const interes = form['interes'] / 100;

    useEffect(() => {
        let result = DataProcessing(form['prestamo'], interes, form['periodo']);
        setData(result);  
    },[form]);

    return data;
}

export default useAnalyzer;