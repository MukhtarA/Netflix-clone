import React from "react";
import {View, Text} from "../../components/Themed";
import styles from "./styles";
import {Image, Pressable} from "react-native";
import movie from "../../assets/data/movie";
import {AntDesign, Entypo, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const MovieDetailsScreen = () => {
    console.log(firstEpisode);
    return(
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            <View style={{ padding: 12 }}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                    <MaterialIcons name='hd' size={24} color='white' />
                </View>


                <Pressable onPress={() => {console.warn('play')}} style={styles.playButton}>
                    <Text style={styles.playButtonTitle}>
                        <Entypo name="controller-play" size={16} color="black" />
                        Play
                    </Text>
                </Pressable>

                <Pressable onPress={() => {console.warn('download')}} style={styles.downloadButton}>
                    <Text style={styles.downloadButtonTitle}>
                        <AntDesign name="download" size={16} color="white" />
                        {' '}
                        Download
                    </Text>
                </Pressable>

                <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>

                <View style={{flexDirection: 'row', marginVertical: 15}}>
                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <AntDesign name="plus" size={24} color="white"/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <Feather name="thumbs-up" size={24} color="white"/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <Ionicons name="share-social" size={24} color="white"/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MovieDetailsScreen;
