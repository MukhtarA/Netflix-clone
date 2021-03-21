import React, {useState} from "react";
import {View, Text} from "../../components/Themed";
import styles from "./styles";
import {FlatList, Image, Pressable} from "react-native";
import movie from "../../assets/data/movie";
import {AntDesign, Entypo, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import {Picker} from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeason = movie.seasons.items[0];
const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {

    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const seasonNames = movie.seasons.items.map(season => season.name);

    return(
        <View>
            <VideoPlayer episode={currentEpisode} />
            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({ item }) =>
                    <EpisodeItem
                        episode={item}
                        onPress={(episode) => {
                            setCurrentEpisode(episode);
                        }}
                    />}
                style={{ marginBottom: 250, padding: 12,}}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View>
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

                        <View style={{flexDirection: 'row', marginTop: 15}}>
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
                        <Picker
                            style={{color: 'white'}}
                            itemStyle={{color: 'white'}}
                            selectedValue={currentSeason.name}
                            dropdownIconColor={'white'}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex]);
                            }}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item value={seasonName} label={seasonName} key={seasonName} />
                            ))}
                        </Picker>
                    </View>

                )}
            />
        </View>
    );
}

export default MovieDetailsScreen;
