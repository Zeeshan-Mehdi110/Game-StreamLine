import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const GoLiveScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
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
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Go Live'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <View
            style={StyleSheet.applyWidth({ marginTop: 40 }, dimensions.width)}
          >
            {/* Image */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.GoLive}
                style={StyleSheet.applyWidth(
                  { height: 147, width: 245 },
                  dimensions.width
                )}
              />
            </View>
            {/* Go Live Now! */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 28,
                  marginTop: 35,
                  opacity: 0.8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Go Live Now!'}
            </Text>
            {/* Description */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  lineHeight: 21,
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 20,
                  opacity: 0.8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Always remember to follow '}
              {/* Go Live Now! */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    marginTop: 35,
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Streamo Community Guidelines: '}
              </Text>
              {/* Go Live Now! */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    marginTop: 35,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {
                  'illegal activities, violence, harrashment, hate speech, gore, sex, and nudity are inappropriate.'
                }
              </Text>
            </Text>
            {/* Games */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ChooseCategoryScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginLeft: 20, marginRight: 20, marginTop: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Divider'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 32,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 110,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.GoLiveSG}
                  style={StyleSheet.applyWidth(
                    { height: 72, marginLeft: 20, width: 72 },
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 1,
                      justifyContent: 'space-around',
                      marginLeft: 20,
                      marginRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 19,
                      },
                      dimensions.width
                    )}
                  >
                    {'Stream Games'}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        marginTop: 8,
                        opacity: 0.7,
                      },
                      dimensions.width
                    )}
                  >
                    {'Play & stream from your mobile devices'}
                  </Text>
                </View>
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'Entypo/chevron-thin-right'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { marginRight: 20 },
                    dimensions.width
                  )}
                />
              </View>
            </Touchable>
            {/* IRL */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ChooseCategoryScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginLeft: 20, marginRight: 20, marginTop: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Divider'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 32,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 110,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.GoliveSI}
                  style={StyleSheet.applyWidth(
                    { height: 72, marginLeft: 20, width: 72 },
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 1,
                      justifyContent: 'space-around',
                      marginLeft: 20,
                      marginRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 19,
                      },
                      dimensions.width
                    )}
                  >
                    {'Stream IRL'}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        marginTop: 8,
                        opacity: 0.7,
                      },
                      dimensions.width
                    )}
                  >
                    {'Broadcast your life wherever you are'}
                  </Text>
                </View>
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'Entypo/chevron-thin-right'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { marginRight: 20 },
                    dimensions.width
                  )}
                />
              </View>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(GoLiveScreen);
