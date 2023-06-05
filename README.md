# React Native App Assessment

**This is the Fastned React Native App assessment. The assessment is intended to give us insights into your technical abilities, engineering approach and general technical working habits. We view your performance on this assessment as indicative of the work you will deliver as a Fastned software engineer.**

The assessment consists of an assignment to prepare beforehand and a presentation about your implementation of the assignment at the Fastned’s office or through video conference.

We ask you to treat the assessment confidential so we can use it again in the future.

Your code should be pushed to a branch, not the `main` one.

At the assessment presentation, you are free to deliver your presentation in any form, but we expect you to cover:

* The overall approach you took to the assignment
* The architecture of the solution delivered
* Your solution for each of the user stories

---

## Assignment

### The Fastned Solar Charging Network

In an ongoing push to make the world greener, Fastned is investing in a mobile application that provides all electric vehicle drivers with information about their car. The Product Owner has passed you some stories and is expecting you to come up with a great solution.

A prerequisite is to have this application built with **React Native naked** and he is strict about ignoring any **React Native Expo** builds. And of course he is expecting your application to successfully build to **iOS** and **Android** without any issue.

### Backend service

This project contains a default backend service that provides a vehicle list and vehicle detail information. You can run the service in a Docker container from the root of this project by running:

```
docker-compose up -d
```

The following endpoints are available to use:

* http://localhost:8485/api/vehicles/
* http://localhost:8485/api/vehicles/<id>/

## The Stories

* Vehicle list screen: As Fastned we want a screen that **lists** all known vehicles so we can provide our customers with an overview to help them find their vehicle
* Vehicle detail screen: As Fastned we want a **detailed** view of vehicle information so we can provide our customers with specific vehicle details
* Navigation: As Fastned we want the customer to be able to seamlessly **navigate** between the list and detail view so we minimize the effort to find a vehicle

A note from the engineers: At Fastned we deliver all code with **tests**, we use **React query** for the data handling and use a **readme** in the project.

### FAST-1: Vehicle list screen

A full screen which renders a **flatlist**. Vehicle **Brand**, **Model** and **Version** should be rendered as an item inside the flatlist. Users should be **navigated** to the vehicle details screen with **on select** event.

### FAST-2: Vehicle detail screen

A full screen that renders the selected **vehicle details**. All information should be rendered inside a scrollable content. This screen should have a **Go Back** button to the vehicle list screen. This detail screen should show the following data:

* Photo
* Brand, Model and Version
* Connector Type
* Recommended Charger
* A link to external help screen of selected vehicle on Fastned website

## Bonus

* Searching vehicle in the list
* React Native Debugger integration

## Deadline ##

When you think **it’s ready**
