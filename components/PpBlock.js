import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PpBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      style={StyleSheet.applyWidth(
        { marginLeft: 20, marginRight: 20, marginTop: 20 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', height: 90 },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Video}
          style={StyleSheet.applyWidth(
            { borderRadius: 16, height: 90, width: 160 },
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginLeft: 16 },
            dimensions.width
          )}
        >
          <Text
            numberOfLines={1}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Drop Enabled | Overw...'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                marginBottom: 15,
                marginTop: 15,
              },
              dimensions.width
            )}
          >
            {'Spoorge • Overwatch 2'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                opacity: 0.75,
                paddingBottom: 3,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 3,
              },
              dimensions.width
            )}
          >
            {'4.8M Views • 1 hour ago'}
          </Text>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(PpBlock);
