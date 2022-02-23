import { ArrowForwardIcon, AspectRatio, Box, Button, Center, Flex, Heading, HStack, Image, Stack, VStack } from 'native-base';
import React from 'react'
import { Text } from 'react-native'

export default function SingleMovie(props) {
    const {item, navigation} = props;
    if(item.id){
        return (
            <Box alignItems="center" safeAreaTop={0} marginBottom={5}>
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="info.200" 
                borderWidth="1" _dark={{borderColor: "info.600", backgroundColor: "info.600"}} 
                _web={{shadow: 4, borderWidth: 0}} _light={{backgroundColor: "gray.50"}}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}} 
                            alt="image" />
                        </AspectRatio>
                    </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign="center">
                            {item.title}
                        </Heading>
                        <Text fontSize="xs" _light={{color: "violet.500"}} 
                        _dark={{color: "violet.400"}} fontWeight="500" ml="-0.5" mt="-1"
                        style={{textAlign: "center"}}>
                            {item.id}
                        </Text>
                        <Text fontSize="xs" _light={{color: "violet.500"}} 
                        _dark={{color: "violet.400"}} fontWeight="500" ml="-0.5" mt="-1"
                        style={{textAlign: "center"}}>
                            {item.release_date}
                        </Text>
                    </Stack>
                        
                    <HStack alignItems="center" space={4} justifyContent="center">
                        <Box alignItems="center">
                            <Button onPress={() => {
                                navigation.navigate({name: "details", params: {
                                    id: item.id
                                }})
                            }}
                            backgroundColor="info.700">
                                <Text fontSize="bold">
                                    More Details
                                </Text>
                            </Button>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </Box>
        
        )
    }
    return <Text>No Movies yet!</Text>
}
