import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  Platform
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Slide } from './src';

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");
const isIphoneX = Platform.OS === "ios" && HEIGHT === 812 && WIDTH === 375;

export default class Gallery extends Component {
  static defaultProps = {
    initialIndex : 0,
    backgroundColor: '#000',
    data : [],
    paginationSize: 10,
    initialNumToRender: 4,
    onChange: () => {},
  }
  static propsType = {
    backgroundColor: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.arrayOf((propValue, key) => {
      if (!propValue[key].id || !propValue[key].image) {
        return new Error(
          'Data prop is invalid. It must be an object containing "id" and "image" keys.'
        );
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = { index: this.props.initialIndex };
  }

  onScrollEnd = (e) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (pageNum !== this.state.index) {
      this.setIndex(pageNum);
    }
  }

  getItemLayout = (data, index) => {
    return {
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index: index,
    };
  }

  goTo = (index) => {
    this.setIndex({ index });
    this.swiper.scrollToIndex({ index: Number(index) });
  }
  
  setIndex = (index) => {
    this.setState({ index });
    this.props.onChange(this.props.data[index]);
  }

  render() {
    const backgroundColor = this.props.backgroundColor;
    const data = this.props.data;
    return (
      <View
        style={[styles.container, {backgroundColor}]}
      >
        <FlatList
          style={styles.content}
          data={data}
          horizontal
          pagingEnabled
          initialNumToRender={this.props.initialNumToRender}
          initialScrollIndex={this.props.initialIndex}
          ref={ref => this.swiper = ref}
          onMomentumScrollEnd={this.onScrollEnd}
          getItemLayout={this.getItemLayout}
          renderItem={img => <Slide {...img} />}
          keyExtractor={item => String(item.id)}
        />
        <Pagination
          index={this.state.index}
          data={data}
          initialNumToRender={this.props.initialNumToRender}
          initialScrollIndex={this.props.initialIndex}
          goTo={this.goTo}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor:'red'
  },
  content: {
    flex : 1,
    marginTop: Platform.OS == 'ios' ? (isIphoneX ? 44 : 20) : 0
  }
};
