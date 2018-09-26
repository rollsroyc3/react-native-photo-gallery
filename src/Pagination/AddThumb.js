import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export const SIZE = 80;

class AddThumb extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onAdd} activeOpacity={1}>
                <View style={[styles.thumb, styles.addImageContainer]}>
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
        margin: 5,
    },
    thumb: {
        width: SIZE,
        height: SIZE,
    },
    addImageContainer: {
        backgroundColor: '#A7A7A7',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default AddThumb;
