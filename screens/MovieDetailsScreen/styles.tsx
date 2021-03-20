import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    match: {
        color: '#9de589',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year: {
        color: '#8c8c8c',
        marginRight: 5,

    },
    ageContainer: {
        backgroundColor: '#ffe76a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 5,
        marginRight: 5,
    },
    age:{
        color: '#000000',
        fontWeight: 'bold',

    },
    playButton: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginVertical: 5,
    },
    playButtonTitle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    downloadButton: {
        backgroundColor: '#353535',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginVertical: 5,

    },
    downloadButtonTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
