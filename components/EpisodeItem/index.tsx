import * as React from "react";
import {Text, View} from "../Themed";
import styles from "./styles";
import {Image, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Episode} from "../../types";

interface EpisodeItemProps {
    episode: Episode;
    onPress: (episode: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode, onPress } = props;
    return(
        <Pressable style={{ marginVertical: 10 }} onPress={() => onPress(episode)}>
            <View style={styles.row}>
                <Image source={{ uri: episode.poster }} style={styles.image} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>

                <AntDesign name={'download'} size={24} color='white' />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    );
}

export default EpisodeItem;
