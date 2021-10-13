import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

function Home() {
    const data = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    return (
        <div>
            home
        </div>
    )
}

export default Home