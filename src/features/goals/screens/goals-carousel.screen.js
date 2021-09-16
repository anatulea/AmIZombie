/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { GoalInfoCard } from "../components/goal-info-card.component";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.brand.muted};
  padding-top: 50px;
`;

export class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "white",
        }}
        inactiveDotStyle={{
          width: 20,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "white",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <SafeArea>
        <Carousel
          layout={"default"}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={350}
          itemWidth={250}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
        {this.pagination}
      </SafeArea>
    );
  }
}
