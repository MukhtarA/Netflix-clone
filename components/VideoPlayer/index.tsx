import {Episode} from "../../types";
import {Text, View} from "../Themed";
import * as React from "react";
import {Video} from "expo-av";
import {useEffect, useRef, useState} from "react";
import styles from './styles';
import {Playback} from "expo-av/build/AV";

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        if(!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })()
    },[episode])
    return(
        <View>
            <Video
                ref={video}
                useNativeControls
                resizeMode="contain"
                style={styles.video}
                source={{
                    uri: episode.video
                }}
                posterSource={{
                    uri: episode.poster
                }}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
}

export default VideoPlayer;
