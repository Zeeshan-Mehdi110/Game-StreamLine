import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateNewPasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SuccessModal, setSuccessModal] = React.useState(false);
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
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
          {'Create New Password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Artwork */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginTop: 20 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.CNP}
              style={StyleSheet.applyWidth(
                { height: 271, width: 380 },
                dimensions.width
              )}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                marginTop: 20,
                opacity: 0.8,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'Create Your New Password'}
          </Text>
          {/* Password */}
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
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <Icon
              name={'MaterialCommunityIcons/lock'}
              size={20}
              style={StyleSheet.applyWidth({ opacity: 0.6 }, dimensions.width)}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  justifyContent: 'center',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <TextInput
                editable={true}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Password'}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
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
                value={textInputValue}
              />
            </View>
            <Icon
              name={'Ionicons/ios-eye-off-sharp'}
              size={20}
              style={StyleSheet.applyWidth({ opacity: 0.6 }, dimensions.width)}
            />
          </View>
          {/* Confirm Password */}
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
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <Icon
              name={'MaterialCommunityIcons/lock'}
              size={20}
              style={StyleSheet.applyWidth({ opacity: 0.6 }, dimensions.width)}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  justifyContent: 'center',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <TextInput
                editable={true}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
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
            <Icon
              name={'Ionicons/ios-eye-off-sharp'}
              size={20}
              style={StyleSheet.applyWidth({ opacity: 0.6 }, dimensions.width)}
            />
          </View>
          {/* Remember me */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginTop: 15 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: 170 }, dimensions.width)}
            >
              <CheckboxRow
                direction={'row-reverse'}
                label={'Remember me'}
                onPress={newCheckboxRowValue => {
                  try {
                    setCheckboxRowValue(newCheckboxRowValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { minHeight: 50 },
                  dimensions.width
                )}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* Continue */}
      <Button
        onPress={() => {
          try {
            setSuccessModal(true);
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
        title={'Continue '}
      />
      {/* Success Modal */}
      <>
        {!SuccessModal ? null : (
          <Modal
            animationType={'fade'}
            presentationStyle={'overFullScreen'}
            transparent={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_22'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.6,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, justifyContent: 'center' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderRadius: 52,
                    height: 487,
                    marginLeft: 35,
                    marginRight: 35,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 40,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Successpopup}
                  style={StyleSheet.applyWidth(
                    { height: 180, width: 185 },
                    dimensions.width
                  )}
                />
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 24,
                      marginTop: 25,
                    },
                    dimensions.width
                  )}
                >
                  {'Successful!'}
                </Text>
                {/* Desctiption */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 18,
                      lineHeight: 24,
                      marginLeft: 15,
                      marginRight: 15,
                      marginTop: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {
                    'Please wait a moment, we are looking for a suitable recommendation for you...'
                  }
                </Text>
                {/* Next */}
                <Button
                  onPress={() => {
                    try {
                      setSuccessModal(false);
                      navigation.navigate('LoginScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.primary,
                      borderRadius: 8,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      marginTop: 25,
                      paddingLeft: 60,
                      paddingRight: 60,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Next -->'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CreateNewPasswordScreen);
