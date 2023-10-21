import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UpdateProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textInputValue, setTextInputValue] = React.useState('');

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
          {'Fill Your Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-evenly',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View>
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Avatar}
                style={StyleSheet.applyWidth(
                  { height: 160, width: 160 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
          {/* Full name */}
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
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
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
                placeholder={'Full Name'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
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
          </View>
          {/* Nickname */}
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
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
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
                placeholder={'Nickname'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* DOB */}
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
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            >
              <DatePicker
                borderColor={'"rgba(0, 0, 0, 0)"'}
                date={datePickerValue}
                label={'Date of Birth'}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                rightIconName={'Feather/calendar'}
                type={'underline'}
              />
            </View>
          </View>
          {/* Email */}
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
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
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
                placeholder={'Email'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
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
              color={theme.colors['Custom Color_20']}
              name={'MaterialCommunityIcons/email-outline'}
              size={24}
            />
          </View>
          {/* Phone */}
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
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                editable={true}
                keyboardType={'phone-pad'}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'+1 000 000 000'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* Gender */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'column',
                height: 56,
                justifyContent: 'center',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Touchable
              style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 56,
                    justifyContent: 'space-between',
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_21'],
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Gender'}
                </Text>
                <Icon
                  color={theme.colors['Custom Color_20']}
                  name={'FontAwesome/caret-down'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
          {/* Continue */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('CreateNewPinScreen');
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
                marginTop: 40,
                textAlign: 'center',
                width: '100%',
              },
              dimensions.width
            )}
            title={'Continue '}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(UpdateProfileScreen);
