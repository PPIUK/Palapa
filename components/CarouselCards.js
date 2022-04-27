import React from 'react';
import { View, Button } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselData from '../constants/CarouselData';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import Web from '../screens/Web';

function CarouselCards({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    return (
        <View style={{backgroundColor:"white"}}>
            <Carousel
                layout="default" // default or stack or tinder
                layourCardOffset={9}
                ref={isCarousel}
                data={CarouselData}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={false}
                autoplay={true}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                renderItem = {CarouselCardItem}
            />

            {data[index]["title"] == "News 📰" ? 
                <Button 
                    onPress={
                        () => {navigation.navigate("NEWS");}
                    }
                    title='Baca lebih lanjut'
                /> 
            : null}
            
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10, 
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
                animatedDuration={1000}
                animatedFriction={10}
            />

        </View>
    );
}

export default CarouselCards;