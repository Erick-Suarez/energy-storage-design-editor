import {useState} from 'react';

const Grid = () => {
    const [rows, setRows] = useState<number>(6);
    const [columns, setColumns] = useState<number>(6);
    const MAX_COL_SIZE: number = 10;
  
    const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);
      if(!value) {
        return;
      }
      setRows(value);
    };
  
    const handleColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10);
      if(!value) {
        return;
      }
      setColumns(value > MAX_COL_SIZE ? MAX_COL_SIZE : value);
    };
  
    return (
      <div className="ml-8 w-full flex justify-center">
        <div>
          <div className="grid grid-cols-2 p-8 w-96 bg-stone-900 rounded-xl shadow-lg justify-center items-center">
            <div>
              <label htmlFor="rows" className="mr-2">
                Rows:
              </label>
              <input
                id="rows"
                type="number"
                min="1"
                value={rows}
                onChange={handleRowsChange}
                className="w-16 px-2 py-1 rounded text-black"
                />
            </div>
            <div>
              <label htmlFor="columns" className="mr-2">
                Columns:
              </label>
              <input
                id="columns"
                type="number"
                min="1"
                max={MAX_COL_SIZE}
                value={columns}
                onChange={handleColumnsChange}
                    className="w-16 px-2 py-1 rounded text-black"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className={`grid grid-rows-${rows}`}>
              {Array(rows)
                .fill(null)
                .map((_, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {Array(columns)
                    .fill(null)
                      .map((_, colIndex) => (
                        <div
                          key={colIndex}
                          className="bg-stone-900 border border-white w-16 h-16 rounded-md"
                        ></div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Grid;