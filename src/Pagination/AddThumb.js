import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export const SIZE = 80;

class AddThumb extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.onAdd} activeOpacity={1}>
                <View style={[styles.image, styles.addImageContainer]}>
                    <Icon
                        color="white"
                        underlayColor="white"
                        name="plus"
                        type="font-awesome"
                        size={26}
                    />
                </View>
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
    },
    thumb: {
        width: SIZE,
        height: SIZE,
    },
    image: {
        width: 60,
        height: 60,
        margin: 10,
    },
    addImageContainer: {
        backgroundColor: '#A7A7A7',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default AddThumb;
