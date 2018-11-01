import { Dimensions, Platform, FlatList, View } from 'react-native';
import React, { Component } from 'react';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import SwiperThumb, { SIZE } from './SwiperThumb';
import AddThumb from './AddThumb';

export class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const index = this.props.index;
        if (index != undefined && index != null) {
            try {
                setTimeout(index => {
                    this.list.scrollToIndex({
                        index,
                    });
                }, 1000);
            } catch (e) {
                console.log('RNPG - error scroll to index');
            }
        }
    }

    navigate(index) {
        this.props.goTo(index);
    }

    renderItem = ({ item, index }) => {
        return (
            <SwiperThumb
                data={item}
                active={index == this.props.index}
                navigate={this.navigate.bind(this, index)}
                index={index}
            />
        );
    };

    getItemLayout = (data, index) => {
        return {
            length: SIZE,
            offset: SIZE * index,
            index: index,
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <AddThumb onAdd={this.props.onAdd} />
                <FlatList
                    horizontal
                    ref={sc => (this.list = sc)}
                    data={this.props.data}
                    extraData={this.props.index}
                    renderItem={this.renderItem}
                    style={[
                        styles.pages,
                        {
                            width:
                                this.props.data.length * SIZE > WIDTH
                                    ? WIDTH
                                    : this.props.data.length * SIZE,
                        },
                    ]}
                    initialNumToRender={this.props.initialNumToRender}
                    initialScrollIndex={this.props.initialIndex}
                    getItemLayout={this.getItemLayout}
                    keyExtractor={item => String(item.id)}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#6C6C6C',
        width: Dimensions.get('window').width,
        height: SIZE + 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    pages: {
        height: SIZE + 10,
    },
};
