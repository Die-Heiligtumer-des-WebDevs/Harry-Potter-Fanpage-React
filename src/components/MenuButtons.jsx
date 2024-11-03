const Button = ({ buttonNames }) => {
   return (
     <div>
       {buttonNames ? buttonNames.map((name, index) => (
         <button key={index}>
           {name}
         </button>
       )): <>Not available</>}
     </div>
   );
 };

 export default Button;
 

