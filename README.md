# WaybackURL by Simar Randhawa

A Chrome extension that modifies URLs by removing `http://` or `https://` and replaces the domain with a custom target. It then opens the modified URL in a new tab.

## Features
- Removes `http://` or `https://` from the entered URL.
- Replaces the domain with a custom target (`web.archive.org`).
- Opens the modified URL in a new tab with a single click.

## How to Use
1. Install the extension in Chrome:
   - Go to `chrome://extensions/`.
   - Enable "Developer mode" (toggle on the top-right corner).
   - Click "Load unpacked" and select the extension folder.
2. Click on the extension icon in the Chrome toolbar.
3. Enter the URL in the input box.
4. Click the "Open" button to open the modified URL in a new tab.

## Screenshot
![Screenshot](screenshot.png) <!-- Add a screenshot of your extension here -->

## Code Structure
- `manifest.json`: Configuration file for the Chrome extension.
- `popup.html`: The UI of the extension.
- `popup.js`: Logic for modifying and opening the URL.
- `styles.css`: Styling for the extension's UI.

## Author
- **Simar Randhawa**  
  GitHub: [Simar Randhawa](https://github.com/YourGitHubUsername)  
  Email: your.email@example.com

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
