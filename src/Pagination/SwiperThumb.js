import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-cached-image';

export const SIZE = 80;

class SwiperThumb extends Component {
    goToSlide = () => {
        this.props.navigate(this.props.index);
    };

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.goToSlide} activeOpacity={1}>
                <CachedImage
                    style={[styles.thumb, { opacity: this.props.active ? 1 : 0.6 }]}
                    source={this.props.data.thumb || this.props.data.image}
                />
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        width: SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE,
        margin: 5,
        marginLeft: 0,
    },
    thumb: {
        width: SIZE,
        height: SIZE,
    },
};

export default SwiperThumb;
