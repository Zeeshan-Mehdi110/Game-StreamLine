import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const SubscribeScreen = props => {
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
          {'Subscribe to TalesWire'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color'],
              fontFamily: 'Inter_500Medium',
              fontSize: 22,
            },
            dimensions.width
          )}
        >
          {'Tier 1 Subscription'}
        </Text>
        {/* Sub title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_300Light',
              fontSize: 15,
              lineHeight: 21,
              marginTop: 8,
            },
            dimensions.width
          )}
        >
          {
            'Directly support the channels, includes ad-free viewing, subscriber badges, and a hundred of emotes. Chat during subscriber-only mode.'
          }
        </Text>
        {/* Renews every */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 15 }, dimensions.width)}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                lineHeight: 21,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Renews every'}
          </Text>
          {/* Plans */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* 2.99 */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginRight: 5 },
                dimensions.width
              )}
            >
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-start',
                      backgroundColor: theme.colors['Divider'],
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Custom Color'],
                      borderLeftWidth: 2,
                      borderRadius: 16,
                      borderRightWidth: 2,
                      borderTopWidth: 2,
                      height: 84,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      paddingRight: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'USD $2.99'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Month'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* 4.99 */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 5, marginRight: 5 },
                dimensions.width
              )}
            >
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-start',
                      backgroundColor: theme.colors['Divider'],
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 2,
                      borderRadius: 16,
                      borderRightWidth: 2,
                      borderTopWidth: 2,
                      height: 84,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      paddingRight: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'USD $4.99'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'3 Months'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* 9.99 */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 5 },
                dimensions.width
              )}
            >
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-start',
                      backgroundColor: theme.colors['Divider'],
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 2,
                      borderRadius: 16,
                      borderRightWidth: 2,
                      borderTopWidth: 2,
                      height: 84,
                      justifyContent: 'center',
                      paddingLeft: 5,
                      paddingRight: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'USD $9.99'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'6 Months'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        {/* Subscriber Benefits: */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                lineHeight: 21,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Subscriber Benefits:'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Badges */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Subs1}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 72 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Badges'}
                </Text>
              </View>
            </Touchable>
            {/* Emotes */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Subs2}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 72 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Emotes'}
                </Text>
              </View>
            </Touchable>
            {/* Ad-Free */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Subs3}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 72 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Ad-Free'}
                </Text>
              </View>
            </Touchable>
            {/* Chats */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', paddingTop: 16 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Sub4}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 72 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.strong, marginTop: 10 },
                    dimensions.width
                  )}
                >
                  {'Chats'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Subscribe */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('SelectPaymentMethodScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 100,
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            height: 58,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Subscribe for USD $2.99 /month'}
      />
    </ScreenContainer>
  );
};

export default withTheme(SubscribeScreen);
