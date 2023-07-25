import styles from './tables.module.css';

export function Tables(props: any) {
  const headerData: any = props.tableData.header;
  const bodyData: any = props.tableData.dataBody;
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {headerData.map((head) => (
            <th key={head.key} className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              {head.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {bodyData.map((note) => (
          <tr key={note.id}>
            {headerData.map((head,i) => (
              <td key={i} className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">
                  {note[head.key]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tables;
