import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Slider,
  Switch,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StreamInfoScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [sliderValue, setSliderValue] = React.useState(0);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [tags, setTags] = React.useState(['English', '100%', 'Ranked']);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
            paddingLeft: 10,
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
          {'Stream Info'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingTop: 16 },
            dimensions.width
          )}
        >
          {/* Title */}
          <View
            style={StyleSheet.applyWidth(
              { paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Title'}
            </Text>
            <TextInput
              defaultValue={'Overwatch Drops Enabled'}
              editable={true}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['BG Gray']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Tags */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            {/* header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Tags'}
              </Text>

              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 13,
                        marginRight: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Add Tags'}
                  </Text>
                  <Icon
                    color={theme.colors['Custom Color']}
                    name={'Feather/plus'}
                    size={20}
                  />
                </View>
              </Touchable>
            </View>
            {/* tags */}
            <FlashList
              contentContainerStyle={StyleSheet.applyWidth(
                { flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
              data={tags}
              estimatedItemSize={50}
              horizontal={true}
              keyExtractor={tagsData =>
                tagsData?.id || tagsData?.uuid || JSON.stringify(tagsData)
              }
              listKey={'5ZlHrZnw'}
              numColumns={1}
              renderItem={({ item }) => {
                const tagsData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 2,
                        borderColor: theme.colors['Custom Color'],
                        borderLeftWidth: 2,
                        borderRadius: 100,
                        borderRightWidth: 2,
                        borderTopWidth: 2,
                        flexDirection: 'row',
                        height: 35,
                        justifyContent: 'center',
                        marginRight: 10,
                        paddingLeft: 14,
                        paddingRight: 14,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                        },
                        dimensions.width
                      )}
                    >
                      {tagsData}
                    </Text>

                    <Touchable
                      style={StyleSheet.applyWidth(
                        { marginLeft: 8 },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Custom Color']}
                        name={'Ionicons/close'}
                        size={20}
                      />
                    </Touchable>
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* Stream Language */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Stream Language'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderRadius: 16,
                  flexDirection: 'column',
                  height: 56,
                  justifyContent: 'center',
                  marginTop: 14,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                      },
                      dimensions.width
                    )}
                  >
                    {'English'}
                  </Text>
                  <Icon name={'FontAwesome/caret-down'} size={24} />
                </View>
              </Touchable>
            </View>
          </View>
          {/* Go Live Notification */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Go Live Notification'}
            </Text>
            <TextInput
              defaultValue={'AndrewAinsley went live!'}
              editable={true}
              placeholder={'Enter a value...'}
              placeholderTextColor={theme.colors['BG Gray']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Stream Volume */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Stream Volume'}
            </Text>
            <Slider
              leftIcon={'MaterialCommunityIcons/youtube-tv'}
              onValueChange={newSliderValue => {
                try {
                  setSliderValue(newSliderValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginLeft: 12, marginRight: 12, marginTop: 14 },
                dimensions.width
              )}
              value={sliderValue}
            />
            <Slider
              leftIcon={'Ionicons/mic'}
              onValueChange={newSliderValue => {
                try {
                  setSliderValue(newSliderValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginLeft: 12, marginRight: 12, marginTop: 8 },
                dimensions.width
              )}
            />
          </View>
          {/* Store Past Broadcasts */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Store Past Broadcasts'}
            </Text>
            <Switch
              onValueChange={newSwitchValue => {
                try {
                  setSwitchValue(newSwitchValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={switchValue}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderTopWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Go Live */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'System',
              fontWeight: '700',
              height: 58,
              marginBottom: 20,
              marginTop: 15,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Go Live'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(StreamInfoScreen);
