import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Ellipse, Line, Rect, G} from 'react-native-svg';
import { COLORS } from '../../constants';
import { createAnimatableComponent } from 'react-native-animatable';

const AnimatableLine = createAnimatableComponent(Line);
const AnimatableRect = createAnimatableComponent(Rect);
const AnimatableEllipse = createAnimatableComponent(Ellipse);

const Manfigure = ({wrongWord}) => {
  const Rope =  <AnimatableLine  animation={'fadeIn'} x1="200" y1= "24 " x2="200" y2="60" stroke={COLORS.standcolor1} strokeWidth="4" />
  const Head =  <AnimatableEllipse animation={'fadeIn'} cx="200" cy="90" rx="30" ry="30" fill={COLORS.headercolor}/>
  const Neck =  <AnimatableRect animation={'fadeIn'} width="10" height="30" x="195" y="118" fill={COLORS.headercolor}/>
  const Hands = <AnimatableLine animation={'fadeIn'} x1="250" y1= "150" x2="150" y2="150" stroke={COLORS.headercolor} stroke-Linecap="round" strokeWidth="10" />
  const Body =  <AnimatableRect animation={'fadeIn'} width="10" height="70" x="195" y="135" fill={COLORS.headercolor}/>
  const Legs =  <G>
                <AnimatableLine animation={'fadeIn'} x1="200" y1= "200" x2="150" y2="270" stroke={COLORS.headercolor} stroke-Linecap="round" strokeWidth="10" />
                <AnimatableLine animation={'fadeIn'} x1="200" y1= "200" x2="250" y2="270" stroke={COLORS.headercolor} stroke-Linecap="round" strokeWidth="10" />
                </G>
    return (
        <View style={styles.container}>
        
            <Svg version="1.1" viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" class="svg-content" width="140" height="200">
                <Rect fill={COLORS.standcolor} width="250" height="10" x="5" y="15" />
                <Rect fill={COLORS.standcolor} width="10" height="350" x="20" y="0" />
                <Rect fill={COLORS.standcolor} width="130" height="30" x="0" y="340" />
                {wrongWord > 0 ? Rope : null}
                {wrongWord > 1 ? Head : null}
                {wrongWord > 2 ? Neck : null}
                {wrongWord > 3 ? Hands : null}
                {wrongWord > 4 ? Body : null}
                {wrongWord > 5 ? Legs : null}
            </Svg>
        </View>
    )
}

export default Manfigure;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 6,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: COLORS.confusing,
    alignItems: 'center',
  },
})