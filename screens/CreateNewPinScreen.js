import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const CreateNewPinScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

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
      {/* heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 30,
            marginTop: 15,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Create New PIN'}
      </Text>
      {/* Sub Heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_400Regular',
            fontSize: 16,
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
        {'Add a PIN number to make your account\nmore secure.'}
      </Text>
      {/* Pin */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Pin Input */}
        <TextInput
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          onChangeText={newPinInputValue => {
            try {
              setTextInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
          value={textInputValue}
        />
        {/* Pin Input */}
        <TextInput
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          onChangeText={newPinInputValue => {
            try {
              setTextInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
        />
        {/* Pin Input */}
        <TextInput
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          onChangeText={newPinInputValue => {
            try {
              setTextInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
        />
        {/* Pin Input */}
        <TextInput
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          onChangeText={newPinInputValue => {
            try {
              setTextInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
        />
      </View>
      {/* Continue */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('SetYourFingerprintScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 100,
            bottom: 0,
            color: theme.colors['Custom #ffffff'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 16,
            height: 58,
            left: 0,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 40,
            position: 'absolute',
            right: 0,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Continue '}
      />
    </ScreenContainer>
  );
};

export default withTheme(CreateNewPinScreen);
