import Kartya from "../component/Kartya";
import { lista } from "../model/adatok";
import KutyaModel from "../model/kutyaModel";
const kutyaModel = new KutyaModel();
export default function Public(props) {
   
  return (
    <div className="public">
      <h2>Public</h2>
      <article className="row">
        {lista.map((elem, index) => {
          return <Kartya obj={elem} key={index}  />; 
         
     

        })}
      </article>
    </div>
  );
}
