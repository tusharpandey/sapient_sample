export function goToDetail(props, data) {
    props.navigation.navigate('galleryDetail', { params: data })
}