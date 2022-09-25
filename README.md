# pterodactyl-widescreen

For some reason, pterodactyl doesn't support wide screen, so i made this extension to allow it 

## How to install

### Setup
- Download the repo and open the file "manifest.json"
- Look for the "content_scripts" area, and look for the URL in the "matches" section
- Edit that URL to your domain name or console's IP address. This will make your web browser run the main.js script when you open your console site
I think that /* has to be on the end of the URL too...
### Install
In your browser, find the extension settings, enable developer mode, and find the button that lets you install an "unpacked extension", 
and select the extension folder that you downloaded (might be a sub-directory, not sure)
