const Button = ({ buttonNames }) => {
    console.log(buttonNames)
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
 

 //<Button buttonNames={ButtonNames} />
//  import Button from "../src/components/MenuButtons.jsx"; // Dein Component
//  import  ButtonNames  from "../src/utils/buttonNames.js"; // Import des Arrays