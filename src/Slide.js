import React, { Component } from 'react';
import { Platform, Image, ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import PhotoView from 'react-native-photo-view';

const styles = {
  slideC: {
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewC: {
    backgroundColor:'transparent',
    alignItems: 'center',
    top: 0,
    justifyContent: 'center',
    flex: 1
  },
  loader: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 10,
    left: (Dimensions.get('window').width / 2) - 10,
  },
};

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading : undefined
    }
  }
  handleLoadStart = (e) => {
    this.setState({loading: true})
    this.props.onLoadStart && this.props.onLoadStart(e);
  }
  handleLoad = (e) => {
    this.setState({loading: false})
    this.props.onLoad && this.props.onLoad(e);
  }
  handleLoadEnd = (e) => {
    this.setState({loading: false})
    this.props.onLoadEnd && this.props.onLoadEnd(e);
  }
  handleTap = (e) => {
    this.props.item.onTap && this.props.item.onTap(e);
  }
  handleViewTap = (e) => {
    this.props.item.onViewTap && this.props.item.onViewTap(e);
  }
  render() {
    const inside = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
    return (
      <View
        style={styles.slideC}
      >
        <PhotoView
          source={this.props.item.image}
          maximumZoomScale={3}
          zoomScale={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          androidScaleType="fitCenter"
          resizeMode="contain"
          style={[
            styles.scrollViewC,
            inside
          ]}
          onTap={this.handleTap}
          onViewTap={this.handleViewTap}
          onLoadStart={this.handleLoadStart}
          onLoad={this.handleLoad}
          onLoadEnd={this.handleLoadEnd}
        />
        {
          this.state.loading === true &&
            <ActivityIndicator style={styles.loader} color="#fff" size="small" />
        }
        {this.props.item.overlay}
      </View>
    );
  }
}
