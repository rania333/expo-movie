import { ArrowForwardIcon, AspectRatio, Box, Button, Center, Flex, Heading, HStack, Image, Progress, Spinner, Stack, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import { clearDetails, movieDetails } from '../context/actions/MovieActions'
import { MovieContext } from '../context/Context'

export default function MovieDetails(props) {
    const {route} = props
    const {state, dispatch} = useContext(MovieContext);
    const {movie} = state;
    console.log("single movie",movie);
    useEffect(()=>{
        const action = async () => {
            dispatch(await movieDetails(route.params.id));
        };
        action();
        return ()=>{
            dispatch(clearDetails())
        }
    },[])
    if(movie.id) {
        const pic = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
        console.log('my pic', pic);
    return (
        <Box alignItems="center" safeAreaTop={0} marginBottom={5} 
        backgroundColor="info.200" height={700} style={{paddingTop: 50}}>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="info.200" 
                borderWidth="1" _dark={{borderColor: "info.600", backgroundColor: "info.300"}} 
                _web={{shadow: 4, borderWidth: 0}} _light={{backgroundColor: "gray.50"}}>
                <Stack p="4" space={3}>
                    <Stack space={2} size={200}>
                        <Heading size="md" ml="-1" textAlign="center">
                            Movie ID:  {movie.id}
                        </Heading>
                        <HStack>
                            <Text style={{fontWeight:"bold", color:"#0369a1",
                            marginRight:5}}>Movie Name: </Text>
                            <Text>{movie.title}</Text>
                        </HStack>
                        <VStack>
                            <Text style={{fontWeight:"bold", color:"#0369a1",
                            marginRight:10}}>Overview</Text>
                            <Text style={{textAlign: "center"}}>{movie.overview}</Text>
                        </VStack>
                        <HStack>
                            <Text style={{fontWeight:"bold", color:"#0369a1",
                            marginRight:5}}>release date: </Text>
                            <Text>{movie.release_date}</Text>
                        </HStack>
                        <VStack>
                            <Text style={{fontWeight:"bold", color:"#0369a1",
                            marginRight:10, marginBottom: 20}}>Average vote</Text>
                            <Progress colorScheme="primary" 
                            size="md" value={movie.vote_average} />
                        
                        </VStack>
                    </Stack>
                        
                    
                </Stack>
            </Box>
        </Box>
    )} else {
        return (
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
                </HStack>
        )
    }
}
