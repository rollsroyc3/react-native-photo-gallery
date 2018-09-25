import { Dimensions, Platform, FlatList, View } from 'react-native';
import React, { Component } from 'react';
const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");
import SwiperThumb, { SIZE } from './SwiperThumb';

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

//   componentDidUpdate() {
//     const index = this.props.index;
//     if(index != undefined && index != null) {
//       this.list.scrollToIndex({
//         index
//       });
//     }
//   }

  navigate(index) {
    this.props.goTo(index);
  }

  renderItem = ({item, index}) => {
    return (
      <SwiperThumb
        data={item}
        active={index == this.props.index}
        navigate={this.navigate.bind(this, index)}
        index={index}
      />
    )
  }

  getItemLayout = (data, index) => {
    return {
      length: SIZE,
      offset: SIZE * index,
      index: index,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          ref={sc => this.list = sc}
          data={this.props.data}
          extraData={this.props.index}
          renderItem={this.renderItem}
          style={[styles.pages, {
            width: this.props.data.length * SIZE > WIDTH ? WIDTH : this.props.data.length * SIZE
          }]}
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
    width: Dimensions.get('window').width,
    height: SIZE,
    alignItems:'center'
  },
  pages : {
    height: SIZE,
  }
};
