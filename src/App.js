import React,{useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function App() {
  
  const arr = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'Light',
    'dark',
    'link',
  ];
  const [item, setItem] = useState('box');
  const changeBox=()=>{
    setItem('box');
    
  }
  const changeButton=(e)=>{
    setItem('buttons');
  }
  return (
   
    <div>
       <Button onClick={changeBox} variant="primary">showboxes</Button>
       <Button onClick={changeButton} variant="primary">showbuttons</Button>
     {
       item==='box' &&  <div>
       {arr.map((values) => {
         return <div className="das">{values}</div>;
       })}
     </div>
     }
     {
       item==='buttons' &&  <div>
       {arr.map((values) => {
         return <Button variant={values}>{values}</Button>;
       })}
     </div>
     }
   
   {/* {item==='box'? <div>
        {arr.map((values) => {
          return <div className="das">{values}</div>;
        })}
      </div>:   <div>
        {arr.map((values) => {
          return <Button variant={values}>{values}</Button>;
        })}
      </div>} */}
    </div>
  );
}
