import React from 'react';
import GalleryComponent from './GalleryComponent';
import { connect } from 'react-redux';
import * as actions from './GalleryActions';
import { SafeAreaView } from 'react-native';
import GetPicsumPhotos from '../../domain/GetDataUseCase'
import { goToDetail } from '../../apputility/Navigation';

class GalleryContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        let photos = new GetPicsumPhotos()
        let images = await photos.getData()
        if (images.error == 101) {
            alert("check your internet connection")
            return
        }
        this.props.galleryRefresh(images)
    }

    onItemClick = (data) => {
        // console.log("item data : " + JSON.stringify(data))
        goToDetail(this.props, data)
    }

    render() {
        let galleryImages = this.props.gallery.galleryImages
        return (<SafeAreaView>
            <GalleryComponent
                data={galleryImages}
                onItemClick={this.onItemClick} />
        </SafeAreaView>)
    }
}

const mapStateToProps = store => {
    const { gallery } = store;
    return { gallery };
};

export default connect(mapStateToProps, actions)(GalleryContainer);