import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { Text, View, useWindowDimensions } from 'react-native';

const SrchBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
        dimensions.width
      )}
    >
      {/* Title */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_500Medium',
            fontSize: 17,
          },
          dimensions.width
        )}
      >
        {'Filter By Tags'}
      </Text>

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
            marginBottom: 10,
            marginTop: 20,
            paddingBottom: 5,
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
            editable={true}
            placeholder={'Search Tags'}
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
      <FlashList
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, flexDirection: 'row' },
          dimensions.width
        )}
        data={[]}
        estimatedItemSize={50}
        horizontal={true}
        keyExtractor={flashListData =>
          flashListData?.id ||
          flashListData?.uuid ||
          JSON.stringify(flashListData)
        }
        listKey={'7a3e9kcD'}
        numColumns={1}
        renderItem={({ item }) => {
          const flashListData = item;
          return (
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color'],
                  borderLeftWidth: 1,
                  borderRadius: 100,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 38,
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
                {flashListData}
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
      />
    </View>
  );
};

export default withTheme(SrchBlock);
