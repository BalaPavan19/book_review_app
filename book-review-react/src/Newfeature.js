import { useState } from "react"

const Newfeature = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1> {count} Catscd </h1>;
            <button onClick= {() => setCount(count +1)}>Click Here</button>
        </div>
    );    
};

export default Newfeature;