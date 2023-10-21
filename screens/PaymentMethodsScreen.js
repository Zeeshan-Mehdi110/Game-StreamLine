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
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const PaymentMethodsScreen = props => {
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
            justifyContent: 'space-between',
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
            },
            dimensions.width
          )}
        >
          {'Payment Methods'}
        </Text>
        {/* Scanner */}
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
              name={'MaterialCommunityIcons/qrcode-scan'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Paypal */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Paypal}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 32 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'PayPal'}
              </Text>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Connected'}
            </Text>
          </View>
        </Touchable>
        {/* Google Pay */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.GooglePay}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 32 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Google Pay'}
              </Text>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Connected'}
            </Text>
          </View>
        </Touchable>
        {/* Apple Pay */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.ApplePay}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 32 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Apple Pay'}
              </Text>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Connected'}
            </Text>
          </View>
        </Touchable>
        {/* Card */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Mcard}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 42 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'•••• •••• 4679'}
              </Text>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Connected'}
            </Text>
          </View>
        </Touchable>
        {/* Card */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Mcard}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 42 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'•••• •••• 2766'}
              </Text>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Connected'}
            </Text>
          </View>
        </Touchable>
      </ScrollView>
      {/* Add New Card */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('AddNewCardScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 100,
            fontFamily: 'System',
            fontWeight: '700',
            height: 58,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Add New Card'}
      />
    </ScreenContainer>
  );
};

export default withTheme(PaymentMethodsScreen);
