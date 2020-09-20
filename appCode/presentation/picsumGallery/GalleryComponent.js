import React, { useState, useEffect } from 'react';
import styles from './GalleryStyle'
import { View, Text, Image, ActivityIndicator, Button } from "react-native"
import ViewPager from '@react-native-community/viewpager';

const PagerItem = (props) => {

    let key = props.data.key
    let author = props.data.author
    let author_url = props.data.author_url

    return (
        <View key={key} style={styles.pageParent}>
            <View>
                <Text style={styles.authorName}>{author}</Text>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: author_url,
                    }}
                />
            </View>
        </View>
    );
}

const Pager = (props) => {
    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            <PagerItem data={props.data[0]} />
            <PagerItem data={props.data[1]} />
            <PagerItem data={props.data[2]} />
            <PagerItem data={props.data[3]} />
        </ViewPager>
    );
};

const GalleryComponent = (props) => {

    let data = props.data
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(!data.length)
    }, [props.data.length])

    return (<View style={styles.container} >
        {isLoading && <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color="#00ff00" />}
        {(!isLoading && data.length > 0) && <View style={{ flex: 1 }}>
            <Pager data={data} />
            <Button
                onPress={props.onRefresh}
                title="onRefresh"
                color="#841584"
            />
        </View>}
    </View>)
}

export default GalleryComponent