import {GoBell, GoDatabase} from 'react-icons/go'
import Button from "../components/Button";

function buttonPage (){
    const handelClick = () => {
        console.log('click!');
    };

    return (
        <div>
     <div>
        <Button primary onClick={handelClick}>
            <GoBell className='mr-1'/>
             Click Me!!</Button>
    </div>
     <div>
     <Button warning outline={true}>
        <GoDatabase/>
         Buy</Button>
 </div>
 <div>
        <Button danger>hi!</Button>
    </div>
    <div>
        <Button secondary>Click!!</Button>
    </div>
    <div>
        <Button success>Click here!</Button>
    </div>
        </div>
    )
}

export default buttonPage;