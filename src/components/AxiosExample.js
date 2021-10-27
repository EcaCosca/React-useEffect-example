import { useEffect, useState} from 'react';
import Axios from 'axios'


const AxiosRequest = () => {
    const [joke, setJoke] = useState('')

    function getJoke() {
        console.log('object');
        Axios.get('https://api.chucknorris.io/jokes/random').then((response) =>  {
            console.log(response)
            console.log(response.data.value)
            setJoke(response.data.value);
        })
    }

    return ( 
        <did>
            <p>{joke}</p>
            <button onClick={getJoke}>Get joke</button>
        </did>
     );
}

export default AxiosRequest;