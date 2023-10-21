import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditChannelProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

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
          {'Edit Channel Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { marginTop: 15, paddingBottom: 15 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* About */}
        <View
          style={StyleSheet.applyWidth(
            { borderBottomWidth: 1, borderColor: theme.colors['Divider'] },
            dimensions.width
          )}
        >
          {/* Header */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginBottom: 20,
                marginLeft: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'About'}
          </Text>
          {/* Username */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Username'}
            </Text>
            <TextInput
              defaultValue={'AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Display Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Display Name'}
            </Text>
            <TextInput
              defaultValue={'AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Bio */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Bio'}
            </Text>
            <TextInput
              defaultValue={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
              }
              editable={true}
              multiline={true}
              numberOfLines={4}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  lineHeight: 20,
                  marginTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Social Links */}
        <View
          style={StyleSheet.applyWidth({ paddingTop: 20 }, dimensions.width)}
        >
          {/* Header */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginBottom: 20,
                marginLeft: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'SOCIAL LINKS'}
          </Text>
          {/* Discord */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Discord'}
            </Text>
            <TextInput
              defaultValue={'https://discord.gg/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Youtube */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'YouTube'}
            </Text>
            <TextInput
              defaultValue={'https://youtube.com/channel/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Twitter */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Twitter'}
            </Text>
            <TextInput
              defaultValue={'https://twitter.com/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Instagram */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Instagram'}
            </Text>
            <TextInput
              defaultValue={'https://instagram.com/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Facebook */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Facebook'}
            </Text>
            <TextInput
              defaultValue={'https://facebook.com/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Telegram */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Telegram'}
            </Text>
            <TextInput
              defaultValue={'https://t.me/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* LinkedIn */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20, marginLeft: 20, marginRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'Linkedin'}
            </Text>
            <TextInput
              defaultValue={'https://discord.gg/AndrewAinsley'}
              editable={true}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['BG Gray'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 56,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditChannelProfileScreen);
