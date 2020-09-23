import React, { useState, useEffect } from 'react';
import styles from './GalleryStyle'
import { View, Text, Image, ActivityIndicator, Button, FlatList, TouchableHighlight } from "react-native"

const PagerItem = (props) => {

    let data = props.data.item
    let trackName = data.trackName
    let collectionName = data.collectionName
    let artworkUrl100 = data.artworkUrl100

    console.log("PagerItem props : " + JSON.stringify(data))

    return (
        <TouchableHighlight
            onPress={() => props.onItemClick(data)}
            underlayColor='#f5f5f5'>
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
            </View>
        </TouchableHighlight>
    );
}

const AlbumList = (props) => {

    let data = props.data
    let collectionId = data.collectionId;

    return (
        <FlatList
            data={data}
            renderItem={(item) => <PagerItem data={item} onItemClick={props.onItemClick} />}
            keyExtractor={(item, index) => index + ""}
        />
    );
};

const GalleryComponent = (props) => {

    let data = props.data
    let result = data.results
    let dataCount = data.resultCount
    let onItemClick = props.onItemClick

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(!dataCount)
    }, [dataCount])

    return (<View style={styles.container} >
        {isLoading && <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color="#00ff00" />}
        {(!isLoading && dataCount > 0) && <View style={{ flex: 1 }}>
            <AlbumList data={result} onItemClick={onItemClick} />
        </View>}
    </View>)
}

export default GalleryComponent