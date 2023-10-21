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

const SetYourFingerprintScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
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
      </View>
      {/* Screen Heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 28,
            marginTop: 15,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Set Your Fingerprint'}
      </Text>
      {/* Sub Heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            letterSpacing: 0.3,
            lineHeight: 21,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
            opacity: 0.75,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Add a fingerprint to make your account\nmore secure.'}
      </Text>
      {/* Image */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.FingerPrint}
          style={StyleSheet.applyWidth({ height: 220 }, dimensions.width)}
        />
        {/* Description */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              letterSpacing: 0.3,
              lineHeight: 24,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 15,
              opacity: 0.75,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Please put your finger on the fingerprint scanner to get started.'}
        </Text>
      </View>
      {/* Buttons */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Skip */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PickwhattoWatchScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color_10'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              width: '47%',
            },
            dimensions.width
          )}
          title={'Skip'}
        />
        {/* Continue */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PickwhattoWatchScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              width: '48%',
            },
            dimensions.width
          )}
          title={'Continue '}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SetYourFingerprintScreen);
