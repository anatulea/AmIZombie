/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { GoalInfoCard } from "../components/goal-info-card.component";
import { View, Dimensions, ScrollView } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const sliderWidth = viewportWidth;
const slideWidth = wp(76);
const itemHorizontalMargin = wp(2);

const itemWidth = slideWidth + itemHorizontalMargin * 2;

export class GoalsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slider1Ref: null,
      carouselItems: [
        {
          name: "Spiritual",
          description:
            "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
          source: require("../../../../assets/svg-icons/social.png"),
        },
        {
          name: "Work",
          description:
            "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
          source: require("../../../../assets/svg-icons/developer.png"),
        },
        {
          name: "Spiritual",
          description:
            "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
          source: require("../../../../assets/svg-icons/social.png"),
        },
        {
          name: "Work",
          description:
            "La parte espiritual forma una parte importante de quiénes somos; de u árbol de vida, y por ello debes tenerla presente.",
          source: require("../../../../assets/svg-icons/developer.png"),
        },
      ],
    };
  }
  _renderItem({ item, index }) {
    return (
      <GoalInfoCard
        goalName={item.name}
        goalDescription={item.description}
        goalSource={item.source}
      />
    );
  }

  get pagination() {
    const { carouselItems, activeIndex, slider1Ref } = this.state;
    return (
      <ScrollView>
        <Carousel
          ref={(c) => {
            if (!this.state.slider1Ref) {
              this.setState({ slider1Ref: c });
            }
          }}
          sliderWidth={sliderWidth}
          data={this.state.carouselItems}
          itemWidth={itemWidth}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
          loop={true}
          // autoplay={true}
          // autoplayDelay={500}
          // autoplayInterval={3000}
        />
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={{ paddingVertical: 10 }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "#68417f",
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "#68417f",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={slider1Ref}
          tappableDots={!!slider1Ref}
        />
      </ScrollView>
    );
  }
  render() {
    return <View>{this.pagination}</View>;
  }
}
