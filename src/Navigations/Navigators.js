export const NavigateToHome = navigation => {
  navigation.navigate('Home');
};

export const NavigateToAuth = navigation => {
  navigation.navigate('Auth');
};

export const NavigateToOnboarding = navigation => {
  navigation.navigate('Onboarding');
};

export const NavigateBack = navigation => {
  navigation.goBack();
};

export const NavigateToDescription = (navigation, hotel) => {
  navigation.navigate('Description', {hotel});
};
