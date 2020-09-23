import React from 'react';
import GalleryDetailComponent from './GalleryDetailComponent';
import { connect } from 'react-redux';
import * as actions from './GalleryDetailActions';
import { SafeAreaView } from 'react-native';

class GalleryDetailContainer extends React.Component {

    constructor(props) {
        super(props)
        this.detailData = this.props.route.params
    }

    render() {
        return (<SafeAreaView>
            <GalleryDetailComponent
                data={this.detailData} />
        </SafeAreaView>)
    }
}

const mapStateToProps = store => {
    const { gallery } = store;
    return { gallery };
};

export default connect(mapStateToProps, actions)(GalleryDetailContainer);