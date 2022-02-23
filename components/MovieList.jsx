import { Box, FlatList, Heading, Text, View, VStack } from 'native-base';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/Context';
import {getMovies} from '../context/actions/MovieActions';
import SingleMovie from './SingleMovie';
export default function MovieList(props) {
    const { state, dispatch } = useContext(MovieContext);
    useEffect(() => {
        //handle action instead of then/catch
        const action = async () => {
            dispatch(await getMovies());
        }
        action();
    }, [])
    return (
        <VStack>
            <Box style={{backgroundColor: "#7dd3fc"}}>
                <Heading fontSize="xl" p="4" pb="3" color="blue.900"
                textAlign="center">
                    ALL MOVIES
                </Heading>
            </Box>
            <FlatList data={state.movies} renderItem={ 
                ({item})=> <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <SingleMovie item={item} {...props}/>
                </View>
            } />
            {/* // ItemSeparatorComponent={()=><Box style={{margin:5,borderBottomWidth:2,borderBottomColor:'grey'}}></Box> }/> */}
        </VStack>
    )
}
