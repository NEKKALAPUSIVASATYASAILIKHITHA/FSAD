import React from 'react';

function Button(){
return (

    <div style={{ backgroundColor: 'darkgrey',padding:'350px' }}>
       <h1 style={{ color: 'lightblue',justifyContent:'center',display:'flex'}}>REACT BUTTON EXAMPLE</h1>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
        
       <button   style={{ padding: '20px 50px', fontSize: '18px',border: 'none' ,backgroundColor: 'green', color: 'black',borderRadius:'10px' }}>Sample button</button><span></span>
      <button  style={{ padding: '10px 50px', fontSize: '18px',border: 'none'  ,backgroundColor: 'lightblue', color: 'black',borderRadius:'10px'}}>Matt is Awesome</button> <br></br>
      <button  style={{ padding: '10px 50px', fontSize: '18px',border: 'none' ,backgroundColor: 'red', color: 'black',borderRadius:'10px' }}>Sample Button</button>
    </div>
    </div>
);
}
export default Button;