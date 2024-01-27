import KutyaModel from "../model/kutyaModel";

import { lista } from "../model/adatok";
import Elem from "../component/Elem";
const kutyaModel = new KutyaModel();
export default function Admin(props) {
  return (
    <div className="admin">
      <h2>Admin</h2>
      <div className="tablazat">
        <table className="table table-striped">
          <tbody className="ertek">
          <tr className="sor"> 
          <th></th>
          <th>Név</th>
          <th>Kor</th>
          <th></th>
          </tr>
            {lista.map((elem, index) => {
              return <Elem obj={elem} key={index} />;
              
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
