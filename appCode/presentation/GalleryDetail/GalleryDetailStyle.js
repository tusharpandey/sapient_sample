import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    pageParent: {
        width: '100%', height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authorName: {
        textAlign: 'center',
        fontSize: 18,
    },
    imageStyle: {
        marginVertical: 10,
        backgroundColor: 'green',
        width: 200,
        height: 200,
        maxHeight: 200,
        maxWidth: 200,
    },
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default styles