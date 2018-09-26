import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

export const SIZE = 80;

class SwiperThumb extends Component {
    goToSlide = () => {
        this.props.navigate(this.props.index);
    };

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.goToSlide} activeOpacity={1}>
                <Image
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
        marginRight: 10,
    },
    thumb: {
        width: SIZE,
        height: SIZE,
    },
};

export default SwiperThumb;
