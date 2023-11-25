export default function TableItem({item}) {
  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.imgUrl}</td>
        <td>{item.categoryId}</td>
      </tr>
    </>
  );
}
