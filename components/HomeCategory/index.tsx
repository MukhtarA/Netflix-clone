import * as React from "react";
import styles from "./styles";
import {Text, View} from "../Themed";
import {useNavigation} from '@react-navigation/native';
import {FlatList, Image, Pressable} from "react-native";
import movie from "../../assets/data/movie";

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;

    const navigation = useNavigation();

    const onPressMovie = (movie) => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }
    return(
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({item}) => (
                    <Pressable onPress={() => onPressMovie(item)}>
                        <Image source={{uri: item.poster}} style={styles.image} />
                    </Pressable>
                    )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default HomeCategory;
