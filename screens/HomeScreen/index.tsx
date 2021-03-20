import * as React from 'react';
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {FlatList, Image, SafeAreaView} from "react-native";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <FlatList showsVerticalScrollIndicator={false} data={categories.items} renderItem={({item}) => <HomeCategory category={item} />} />
    </View>
  );
}
