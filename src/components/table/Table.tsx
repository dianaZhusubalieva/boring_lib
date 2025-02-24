import "./styles.scss";

const Table = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product A</td>
            <td>$10.00</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Product B</td>
            <td>$15.00</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Product C</td>
            <td>$20.00</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
