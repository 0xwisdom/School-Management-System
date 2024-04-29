import { CiEdit } from "react-icons/ci";

function Table() {
  return (
    <>
      <section className="Table">
        <h3>Class</h3>
        <section className="Table__class-info">
          <p>
            Show
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            entries
          </p>
          <p>
            Search: <input type="text" />
          </p>
        </section>
        <table>
          <thead>
            <tr>
              <td>Student Number</td>
              <td>Avatar</td>
              <td>Name</td>
              <td>Admission Number</td>

              <td>Admission Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>1</td>
              <td>
                <img
                  className="picture"
                  src="src\avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit">
                  <CiEdit />
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                <img
                  className="picture"
                  src="src/assets/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <img
                  className="picture"
                  src="src/avatar.jpg"
                  alt="Display Picture"
                />
              </td>
              <td>Edos Amos Osamudiamen</td>
              <td>2383220241</td>

              <td>Admission Date</td>
              <td>
                <button className="delete"></button>
                <button className="edit"></button>
              </td>
            </tr>
          </tbody>
        </table>
        <aside>
          <p>Showing 1 to 10 of 30 entries</p>
          <p>
            Previous<button className="next">1</button>
            <button className="next">2</button>
            <button className="next">3</button>Next
          </p>
        </aside>
      </section>
    </>
  );
}

export default Table;
