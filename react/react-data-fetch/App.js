import { useState } from "react";

// data fetch with 
export default function App(){
    const [id, setId] = useState(1);
    const [pokemon, setPokemon] = useState(null);   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        const handleFetchPokemon = async () => {
            setPokemon(null);
            setLoading(true);
            setError(null);

            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if(ignore) return;

                if(!res.ok) throw new Error("Network response was not ok");

                const json = await res.json();

                setPokemon(json);
                setLoading(false);
            } catch(err) {
                setError(err);
                setLoading(false); 
                } 
            }
            handleFetchPokemon();

            return() => {
                ignore = true;
            }
        }, [id])

    return (
        <>
        <PokemonCard
            loading={loading}
            data ={pokemon}
            error={error}
        />
        <ButtonGroup handleSetId ={setId} />

        </>
    )

}