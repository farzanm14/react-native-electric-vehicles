<div align="center">
  Electric Vehicles 
  <br />
  This app provides all electric vehicle drivers with information about their car.
</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Overall Approach](#overall-approach)
  - [docker](#run-backend)
  - [wireframe](#preview)
  - global resources
  - [architecture](#architecture)
  - reusable components
  - [user interface](#preview)
  - navigation
  - [base tools](#tech-stack)
  - [filter and search ui](#FAST-1:-Vehicle-list-screen)
  - [vehiclesService](#FAST-1:-Vehicle-list-screen)
  - [charging service](#FAST-3:-Charging-screen)
  - [e2etesting](#E2E-Testing-with-Maestro)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Overview of the user stories](#overview-of-the-user-stories)
  - [FAST-1: Vehicle list screen](#FAST-1:-Vehicle-list-screen)
  - [FAST-2: Vehicle detail screen](#FAST-2:-Vehicle-detail-screen)
  - [FAST-3: Charging screen](#FAST-3:-Charging-screen)
- [Preview](#preview)
- [Run Application](#run-Application)
  - [Run backend](#run-backend)
  - [Run mobile app](#Run-mobile-app)
- [E2E Testing with Maestro](#E2E-Testing-with-Maestro)
- [Set up the environment](#set-up-the-environment)

</details>

---

## About

<table>
<tr>
<td>
The Fastned React Native App offers a user-friendly interface that allows users to explore a comprehensive list of cars, With the search and filter feature, users can easily find their desired car model. 
Upon selecting a car from the list, the user is directed to a vehicle detailed screen where they can access information about the chosen vehicle. Additionally, this screen has a button that enables users to initiate the charging process effortlessly.
Once charging is initiated, the user can monitor the progress of the charging session on the charging screen.
<details open>
<summary>Additional info</summary>
<br>

### Built With

- React Native version 0.72.3
- React Query version 5.0.0-beta.15
- Typescript version 5.2.1-rc
</details>
</td>
</tr>
</table>

## Overall Approach

1. Started by running **Docker** and setting up the necessary environment to access and retrieve data.

2. Created a **wire frame** for the project. This involves sketching out the basic layout and structure of the user interface to provide a visual representation of what I understand from user stories and data.

> I used Figma to make a simple concept of the app to recognize screens and components.
> ![wireFrame](docs/demo/wireframe.png)

3. I made sure to gather all the necessary materials and resources needed for the project. This includes icons, images, colors, and dimensions that will be used consistently throughout the application. When it came to choosing scalable icons, I considered three options.

- The first option, using react-native-vector-icons, wasn't suitable for this smaller project.
- The second option, using SVG icons, would have required additional resources for rendering and could have slowed down the application.
- Ultimately, I decided to go with the third option, which involved adding assets directly to the native builds. This choice allowed me to use PNG images that render instantly and can be scaled by including assets of different qualities. Here's an example of one of the assets I added:
  > ![nativeAssets](docs/demo/nativeAssets.png)

4. To create an organized and easy-to-manage codebase, I structured the project's folders using a design approach called **atomic design**. This method helps in arranging the code into logical directories and subdirectories, making it simpler to navigate and maintain. [More Info](#architecture)

5. Implemented **reusable components**. Began by writing unit tests for each component and continuously developing and iterating on the components, resolving any errors or issues that arise during the process. (only base components)

6. Implemented the user interface **(UI) of the screens** using fake data. This allows for the visual representation of the screens to be created and tested without relying on real data.[Preview](#Preview)

7. Created the **navigation** stack and define the routes of the application. This involves setting up the navigation container, and routes and handling the movement between screens.

8. Developed the **base tools** for making API calls. This includes creating functions and classes that handle the communication with the backend server and the moderation of received data.(tools: Axios and react-query)[more info on tech-stack](#tech-stack)

9. Created a charging service that updates the **charging progress in real-time**. This involves implementing the necessary logic and functionality to track and display the progress of charging.

10. Implemented the user interface for a filtering bottom sheet and a search bar. These UI components allow users to **filter and search** for specific information within the application.

11. Implemented the vehiclesService, which **moderates any filters** applied to the given list of vehicles. This service handles the searching of model name and filtering by category or brand of the vehicle based on user preferences.

12. Perform end-to-end **(e2e) testing** using **Maestro**. This involves testing the entire application flow and functionality to ensure that all components and features work together seamlessly.
    ![e2eGif](docs/test/maestro.gif)

## Tech Stack

It's built using following tools:

- React Native version 0.72.3
- React Query version 5.0.0-beta.15
- Typescript version 5.2.1-rc

| **Additional libraries**     | **Reason**                                                                                                                                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| react-navigation             | It provides a flexible and customizable navigation solution and It simplifies the implementation of stack-based navigation                                                                                                     |
| tanstack/react-query         | Used for data fetching and state management and It simplifies the management of remote data, caching, and synchronization, improving the performance and efficiency of                                                         |
| axios                        | HTTP client for making API requests.                                                                                                                                                                                           |
| lottie-react-native          | Render and animate Lottie json files with high-quality, scalable, and interactive animations without the need for complex coding                                                                                               |
| react-native-flash-message   | Provides an easy way to show temporary messages to users, such as success alerts or error notifications.                                                                                                                       |
| react-native-gesture-handler | Enables to implement touch gestures like swiping(back in iOS), dragging, and pinching, enhancing the interactivity and user experience of the app.                                                                             |
| react-native-modalize        | Allowed me to create customizable and interactive bottom sheet dialogs and simplifies providing features like scrollable content, draggable handles, and customizable animations.                                              |
| react-native-portalize       | Enabled me to render components outside of their parent hierarchy, providing more flexibility in UI design of bottom sheets                                                                                                    |
| react-native-size-matters    | Provides a utility for scaling UI elements based on device size and pixel density which ensuring that the app's layout and elements are appropriately sized.                                                                   |
| rxjs                         | A library for reactive programming using Observables, which allowed me to handle asynchronous and event-based operations.                                                                                                      |
| testing-library/react-native | Provides utilities for testing components using a user-centric testing approach by providing utilities to interact with and assert on React Native components in a way that closely resembles how users interact with the app. |
| maestro                      | Mobile UI testing framework that allowed me to easily define and test Flows. Also Maestro ensured that tests remain maintainable, scalable, and compatible with both Android and iOS platforms.                                |

## Architecture

> Atomic design: Breaking down the UI into smaller, independent parts, it promotes reusability, maintainability, and consistency across different screens and applications

<details open>
<summary>Additional info about architecture</summary>
<br>
    src: Root folder of the project.
    ┣ assets: Static assets, such as Lottie JSONs (png images added to native folders )
    ┣ components: Reusable UI components
    ┃ ┣ atoms: Smallest building blocks of your UI
    ┃ ┃ ┣ bottomSheet
    ┃ ┃ ┣ button
    ┃ ┃ ┣ chip
    ┃ ┃ ┣ container
    ┃ ┃ ┣ flashMessage
    ┃ ┃ ┣ image
    ┃ ┃ ┣ skeleton
    ┃ ┃ ┗ text
    ┃ ┣ molecules: Complex UI components that are composed of two or three atoms.
    ┃ ┃ ┣ category
    ┃ ┃ ┣ detailBox
    ┃ ┃ ┣ fabButton
    ┃ ┃ ┣ imageButton
    ┃ ┃ ┣ informationBox
    ┃ ┃ ┗ notFound
    ┃ ┗ organism: More complex UI components that are composed of multiple molecules and atoms.
    ┃ ┃ ┣ alert
    ┃ ┃ ┣ searchBar
    ┃ ┃ ┣ tryAgain
    ┃ ┃ ┗ vehicleHeader
    ┣ e2e: End-to-end testing with Maestro
    ┃ ┣ charging-flow.yaml
    ┃ ┣ splash-flow.yaml
    ┃ ┣ vehicle-flow.yaml
    ┃ ┗ vehicles-flow.yaml
    ┣ models: Data models
    ┃ ┣ Category.ts
    ┃ ┣ Charge.ts
    ┃ ┣ Endpoint.ts
    ┃ ┣ FlashMessage.ts
    ┃ ┣ Vehicle.ts
    ┃ ┗ VehicleDetail.ts
    ┣ navigation: Manage switching between screens
    ┃ ┣ App.tsx
    ┃ ┣ NavigationContainer.tsx
    ┃ ┣ Routes.ts
    ┃ ┗ navigationStyles.ts
    ┣ res: Resource files, such as color definitions, responsive dimension definitions & image references
    ┃ ┣ Colors.ts
    ┃ ┣ Dimensions.ts
    ┃ ┗ Images.ts
    ┣ screens: All screens and their sub components which are not reusable
    ┃ ┣ chargingScreen
    ┃ ┣ splashScreen
    ┃ ┣ vehicleDetailScreen
    ┃ ┗ vehicleListScreen
    ┣ services: List of endpoints, a network request skeleton, react query requests and search/filter event of vehicles list
    ┃ ┣ base
    ┃ ┃ ┣ endpoints.ts
    ┃ ┃ ┣ errorMapper.ts
    ┃ ┃ ┗ requestUtil.ts
    ┃ ┣ chargingService
    ┃ ┣ hooks
    ┃ ┃ ┣ useRefreshByUser.ts
    ┃ ┃ ┣ useSearchVehicle.ts
    ┃ ┃ ┣ useVehicleDetail.ts
    ┃ ┃ ┗ useVehiclesList.ts
    ┃ ┗ vehiclesListService
    ┗ utils: Simple Js methods and linking to browser
    ┃ ┣ helpers
    ┃ ┗ linking

</details>

## Overview of the user stories

### FAST-1: Vehicle list screen

- I utilized the getVehicles API by making an Axios call and managing the response and statuses using React Query. To achieve this, I employed the fetchVehiclesList function, which returns a Promise. This function served as the query function in the useQuery hook. This step is saved in the `useVehiclesList` hook. This hook returns an error, isLoading, data, and a refetch function.

- While the data is loading, I displayed a skeleton loading component to provide a visual indication to the user. This was accomplished by implementing the `SkeletonLoading` component, which displays a list of loading items. I used Lottie animation to show placeholders.

- In the event of an error, I displayed an error message. To achieve this, I utilized the `TryAgain` components to present the error message and provide the option to retry by using the refetch function.

- To render the list items with their respective details, I employed the FlatList component. Each item in the list displayed the brand, model, image and version of the vehicle. For this purpose, I created a separate component called `VehicleItem` to render each item. To render the vehicle's photo I used FastImage which load them fast and smoothly by caching image mechanism.
  Data of the list provided by `filteringService`.

- I implemented **real-time search** functionality for vehicles based on the vehicle model using a text input. `filteringService` that handled the searching process is powered by rxjs.

  > RxJS helps to have an observable object that enabled me to detect any updates on data without implementing complex state management.

- By pressing the Floating Action Button (`FAB`), I displayed **filtering bottom sheet** with two options:

  - filter by **category** which is single select
  - filter by **brands** which is multi selectable

    This was accomplished by using react-native-modalize, which previews a bottom sheet powered by the gesture handler and the user can close it by swiping down or even touch outside.
    The selected category and brands were stored in the FilteredList's state (selectedCategory and selectedBrands). When the user selects a category or some brands, the state is updated, and the filter function in the filteringService was called to update the filtered list.

- Lastly, I enabled **navigation to the detail screen** by passing the selected vehicle as a parameter. To achieve this, I utilized the `useNavigation()` hook, which navigated to the "VehicleDetailScreen" and passed the vehicleId as a parameter.

### FAST-2: Vehicle detail screen

- Get the selected vehicleId from the params that are passed to the VehicleDetailScreen, and extract the value from the route.params object.

- Call the detail API using `useVehicleDetail` hook, the useQuery hook from the @tanstack/react-query helped to receive the vehicle details, loadingStatus and error data (if it happened).

- Show **skeleton loading** while `isLoading`` is true, render the VehicleDetailLoading component. This will display a skeleton loading animation while the data is being fetched.

- Show error message in case an error is returned, during the API request. The MyAlert component should display the error message and provide an option to retry the request by calling the refetch function.

- As data received, Show vehicle information on the screen. I added `VehicleHeader` to organisms, because it's a reusable component for more than one screen(I'm using it in also chargingScreen).
  VehicleHeader renders the vehicle's photo using the FastImage component(which has been cached in the previous screen), and also display the brand, model, version, and category of the vehicle.

- Display connectorType, recommended charger and a link to external help screen with nice ui components below the header.

- Preview Start Charging button at the bottom of the screen which navigates the user to the charging screen as pressing it.

  I used the navigate function from `useNavigation()` hook to navigate to the "ChargingScreen" and pass the vehicleId as a parameter.

- The user can navigate to vehicles list by pressing backButton that I provided at top left corner of the screen also navigating to the back with a swipe left gesture is available in iOS.

### FAST-3: Charging screen

- Get the selected vehicleId from the route. params object. Ask for vehicleDetail information which is already cached in `UseVehicleDetail` hook that is powered by reactQuery.

- Preview vehicle information by using the VehicleHeader component, This component displays the brand, model, photo, category, and version of the selected vehicle.

- Create an instance of the `ChargingService` class(this class is using Rxjs), it generates a random value for the current charge level of the device with `generateRandomCharge()` and then calculates the charge value to display on the charging bar.

- Start The charging process began by calling the `startCharging()` method of the ChargingService class and passing the initial charge value. This method will start an interval that increases the charge value in each step until it reaches 100%.

- Adjust the charging speed when the charge value reaches 80%.Inside the interval, I'm checking if the charge value is greater than or equal to 80%, set the chargingSpeed to a slower value (e.g., I keep this type of values in a constant object to change them once all over project).

- The screen updates with the current charge value using the observable data from the ChargingService class that subscribes any updates on the charge value.

- ChargingBar component display the charging animation and charge information. I used refs to control lottie animation positions. Also I have decreased shining animation by passing speed to the lottieView.

- When the charge value reaches 100%, the interval method is killed and the **Full Charged** message is previewed.

- The user can navigate to vehicleDetailScreen by pressing backButton that I provided at top left corner of the screen also goBack() method will be called if user swipes left (Back by gesture is available in iOS)

## Preview

![Complete Demo](docs/demo/demoVideo.gif)

![wireframe](docs/demo/wireframe.png)
![splash](docs/demo/listLoading.jpg)
![search](docs/demo/search.png)
![filter](docs/demo/filter.png)
![detail](docs/demo/vehicleDetail.png)
![charging](docs/demo/charging.png)

## Run Application

### Run backend

This project contains a default backend service that provides a vehicle list and vehicle detail information. Run the service in a Docker container from the root of this project by running:

```
docker-compose up -d

```

### Run mobile app

If you already have set up the environment you just need to do this instruction to install the application:

in the project main directory (`app`) run

```bash
yarn install

or

npm install
```

<details>
  <summary>iOS</summary>
1- Change directory to ios and run this:

```bash
pod install
```

2- start metro bundler

```bash
npx react-native start
or
yarn react-native start
or
yarn start

```

2- Open XCode to run the project (recommended) or do
back to the main directory by cd .. and run

```bash
npx react-native run-ios
```

</details>

<details>
  <summary>Android</summary>

1- Start metro bundler

```bash
npx react-native start
or
yarn react-native start
or
yarn start
```

2- Open Android Studio to run the project (recommended) or run

```bash
npx react-native run-android
or
yarn react-native run-android
or
yarn android
```

</details>

## E2E Testing with Maestro

I have provided a record:
![e2eTest](docs/test/maestro.gif)

If you already have maestro, please run this to see automated test flows:

```
cd src/e2e
maestro test splash-flow.yaml

```

In order to install maestro please check this [instruction](https://maestro.mobile.dev/getting-started/installing-maestro)

## Set up the environment

If you need to setup the environment please check [react-native official document](https://reactnative.dev/docs/environment-setup), The instructions are a bit different depending on your development operating system. Make sure you are going with React-native-cli steps not Expo.
