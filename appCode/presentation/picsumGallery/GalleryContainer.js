import React from 'react';
import GalleryComponent from './GalleryComponent';
import { connect } from 'react-redux';
import * as actions from './GalleryActions';
import { SafeAreaView } from 'react-native';
import GetPhotos from '../../domain/GetPhotosUseCase'

class GalleryContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        let photos = new GetPhotos()
        let images = await photos.getPhotos()
        if (images.error == 101) {
            alert("check your internet connection")
            return
        }
        this.props.galleryRefresh(images)
    }

    onRefresh = () => {
        this.props.galleryClear()
        this.fetchData()
    }

    render() {
        let galleryImages = this.props.gallery.galleryImages
        console.log("galleryImages : " + JSON.stringify(galleryImages))
        return (<SafeAreaView>
            <GalleryComponent
                data={galleryImages}
                onRefresh={this.onRefresh} />
        </SafeAreaView>)
    }
}

const mapStateToProps = store => {
    const { gallery } = store;
    return { gallery };
};

export default connect(mapStateToProps, actions)(GalleryContainer);