import { useCallback } from 'react';
import { Linking } from 'react-native';

export async function openUrlInBrowser(url: string) {
  // Checking if the link is supported for links with custom URL scheme.
  if (url) {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      // unable to open link
      //TODO show propitiate error
    }
  }
}
