import {QueryClient, QueryClientProvider, useQuery, useMutation} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

function App(){
	return(
		<QueryClientProvider client={queryClient}>
			<Cars/>
			<ReactQueryDevtools/>
		</QueryClientProvider>
	)
}

// fetch
async function fetchCars(){
    const res = await fetch('/data.json');
    return res.json();
}

// consumes that fetched data
function Cars(){

    const {data, status, isFetching} = useQuery('cars', fetchCars); // 'cars' is the query key
        // run multiple queries in the same tab, runs in parallel
    // const {} = useQuery('boats', fetchBoats);
    // const {} = useQuery('planes', fetchPlanes);

    // sometimes one query depends on another, e.g car owned by user 
    const {data:user} = useQuery('user', getUser);

    // dependent query 
    const {data:cars} = useQuery(
            ['cars', user],
            getCarsByUser,
            {
                // query will not execute until user exists 
                enabled: !!user,
            }
    )



    const mutation = useMutation(postTodo, {
        onSuccess:() =>{
            // invalidate and refetch
            queryClient.invalidateQueries('cars');
        }
    })
    if(status==='loading'){
        return <p> Loading...</p>;
    }
    // automatic retries for 3 times
    if(status === 'error'){
        return <p> Error </p>;

    }
    // success render data in ui 
    return(
        <ul>
            {data.map((car) =>(
                <li key={car.id}>{car.make}</li>
            ))}
            {isFetching &&  <p> Refreshing your data ...</p>}
        </ul>
    )

}
		