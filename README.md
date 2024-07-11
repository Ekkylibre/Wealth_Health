# HRnet React Conversion Project

Welcome to the project for converting the HRnet application from jQuery to React for WealthHealth. This project aims to modernize the internal employee records management application to improve performance and stability.

## Project Description

HRnet is an internal web application used to manage employee records at WealthHealth. Currently, it uses jQuery for the front-end, leading to performance issues and user complaints. Management has decided to convert this application to React to address these issues and enhance the user experience.

## Main Tasks

### 1. Converting the HRnet Application to React
- Current HRnet repo: Repo [Link](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)


- Pages to Convert:
    - Create Employee
    - Employee List

- State Management:
    - Implement a global state management solution to replace the current local storage.

- Style Consistency
    - Ensure style consistency while modernizing the design if needed.

- Testing:
    - Prioritize manual testing.
    - Add unit tests if time permits.

### 2. Converting a jQuery Plugin to a React Component

- Date Picker Plugin
- Modal Window Plugin (jQuery.modal.js)
- Dropdown Menus
- Data Tables Plugin

``Choose One Plugin to Convert`` : Only one plugin needs to be converted to a React component. The other three can be replaced with existing React components if time is limited.

### 3. Performance Testing
- Testing Tool: Lighthouse
- Performance Audits :
  - Audit the current jQuery HRnet application.
  - Audit the HRnet application after conversion to React.
- Metrics to Measure :
  - Page load times
  - Network requests

## Conversion Instructions

### Converting the HRnet Application

1. Clone the current HRnet repo :
   ```bash
   git clone [Repo URL]
    ```
2. Install dependencies :
   ```bash
   npm install
    ```
3. Convert the Create Employee and Employee List pages to React :
   - Use functional components and hooks.
   - Implement a state management solution (e.g., Redux, Context API).
4. Modernize the design (optional) :
   - Use a modern UI component library (e.g., Material-UI).
5. Manually test the application
   - Ensure consistency and functionality of the converted pages.

### Converting a jQuery Plugin

1. Choose a plugin to convert (e.g., Modal Window Plugin).
2. Create a new GitHub repo for the React component.
3. Convert the jQuery plugin to a React component :
    - Focus on the UI functionality of the plugin.
    - Use hooks and functional components.
4. Document the component :
    - General description.
    - Usage instructions.
    - Comments explaining props and their usage
5. Publish the component on npm (or GitHub Packages).

### Performance Testing

1. Build the application before the audit :
   ```bach
   npm run build
    ```
2. Conduct Lighthouse audits
   - Compare results between the jQuery and React applications.

### Deliverables
- Code for the HRnet application converted to React.
- Converted React component (one of the four jQuery plugins).
- Comparative Lighthouse performance report.
- Documentation for the React component.

### Conclusion
Converting HRnet to React is a crucial step in improving the performance and maintainability of the application. This transition will also create a more robust and scalable foundation for future enhancements.

### Autor

Developed with ❤️ by [Dany XIONG](https://github.com/Ekkylibre)
