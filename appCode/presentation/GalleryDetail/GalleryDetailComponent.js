import React from 'react';
import styles from './GalleryDetailStyle'
import { View, Text, Image, Button } from "react-native"
import TrackPlayer from 'react-native-track-player';
import Video from 'react-native-video';

const DeatailView = (props) => {

    let data = props.data.params
    let trackName = data.trackName
    let collectionName = data.collectionName
    let artworkUrl100 = data.artworkUrl100

    let previewUrl = data.previewUrl


    console.log("PagerItem props : " + JSON.stringify(previewUrl))

    return (
        <View style={{
            margin: 20,
            padding: 10,
            justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 3,
        }}>
            <Text style={styles.authorName}>{trackName}</Text>
            <Image
                style={styles.imageStyle}
                source={{
                    uri: artworkUrl100,
                }}
            />
            <Text style={styles.authorName}>{collectionName}</Text>
            <Button
                onPress={async () =>
                    TrackPlayer.setupPlayer().then(async () => {

                        // Adds a track to the queue
                        await TrackPlayer.add({
                            id: 'trackId',
                            stopWithApp: false,
                            url: previewUrl,
                            title: 'Track Title',
                            artist: 'Track Artist',
                            // artwork: require('track.png')
                        });

                        // Starts playing it
                        TrackPlayer.play();
                    })
                }
                title="Play"
                color="#841584"
            />

        </View>
    );
}

const GalleryDetailComponent = (props) => {

    return (<View style={styles.container} >
        <DeatailView data={props.data} />
    </View>)
}

export default GalleryDetailComponent