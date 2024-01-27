import './Elem.css';
export default function Elem(props){
function kattintas(){}
    return(
        <tr className="elem">
        {
            Object.keys(props.obj).map((index)=>{
                if(index==="img"){
                    return <td><img className="img-thumbnail" src={props.obj.img} alt=""/></td>
                }
                else{
                    return <td className="text">{props.obj[index]} </td>
                }
            })
        }
        <td className='torol'>❌</td><td className='szerk'>✏</td></tr>
    )
}