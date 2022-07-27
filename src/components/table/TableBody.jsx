export const TableBody = ({ result }) => {
  
  return (
    <tbody>
      {
        result.map(item => (

        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.amortizacion}</td>
          <td>{item.paInteres}</td>
          <td>{item.paMensual}</td>
          <td>{item.saldo}</td>
        </tr>

      ))}
    </tbody>
  )
}
