import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const SearchNoResultsFoundScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 10,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              name={'AntDesign/arrowleft'}
              size={24}
              style={StyleSheet.applyWidth({ opacity: 0.7 }, dimensions.width)}
            />
          </View>
        </Touchable>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flex: 1,
              flexDirection: 'row',
              height: 56,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom Color_21']}
            name={'EvilIcons/search'}
            size={24}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
              },
              dimensions.width
            )}
          >
            <TextInput
              defaultValue={'abcdefgh'}
              editable={true}
              placeholder={'Search'}
              placeholderTextColor={theme.colors['Custom Color_21']}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 8,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>

          <Touchable>
            <Icon
              color={theme.colors['Custom Color']}
              name={'FontAwesome/microphone'}
              size={20}
            />
          </Touchable>
        </View>
      </View>
      <Divider
        color={theme.colors.divider}
        style={StyleSheet.applyWidth(
          { height: 1, marginBottom: 20, marginLeft: 20, marginRight: 20 },
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 60,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.SearchNoResultsFound}
          style={StyleSheet.applyWidth(
            { height: 480, width: 267 },
            dimensions.width
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchNoResultsFoundScreen);
