[![Some things in life are worth waiting for…](logo-text-960x256.png "Beegru Real Estate")](https://beegru-real-estate.wildscript.tech/ "Beegru Real Estate")





### Official documentation for the Beegru Real Estate website





## Quick Start

1. __No, I will not explain how to do this on MacOS or Windows. Get Linux.__

2. You cannot start quickly if you don’t know what [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")is.

   > Skip to “[Get Started](#get-started "Get Started")“ instead.

3. Fire up a terminal using ```Ctrl + Alt + T``` and then punch the following in:

   ```bash
   git clone https://github.com/siddhantvinchurkar/beegru-real-estate.git
   cd beegru-real-estate/
   npm install --save
   npm run build
   sudo npm start
   ```

4. Watch it blow your mind at [http://localhost:1010/](http://localhost:1010/ "localhost on port 1010").






## Table of Contents

1. [Get Started](#get-started "Get Started")
2. [Life Hacks](#life-hacks "Life Hacks")
4. [License and Privacy](#license-and-privacy "License and Privacy")
5. [Credits](#credits "Credits")





## Get Started

1. Clone this repository. Either download a [zip](https://github.com/siddhantvinchurkar/beegru-real-estate/zipball/master "Download .zip") or [tarball](https://github.com/siddhantvinchurkar/beegru-real-estate/tarball/master "Download .tar.gz") and extract it or run the following command:

   ```bash
   git clone https://github.com/siddhantvinchurkar/beegru-real-estate.git
   ```

2. Then open a terminal inside the extracted folder or change the directory:

   ```bash
   cd beegru-real-estate/
   ```

   

3. The Beegru Real Estate website is built using [![Some things in life are worth waiting for…](react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js").

4. [![Some things in life are worth waiting for…](react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js")need [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")to run.

5. So obviously, your first step will be to install [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js"):

   ```bash
   curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
   
6. Okay, good. Now you are running [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")on your machine. The next step is to install [![Some things in life are worth waiting for…](react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js"):

   ```bash
   npm install --save react react-dom next
   ```

7. You will also need [react-helmet](https://www.npmjs.com/package/react-helmet "React Helmet") :

   ```bash
   npm install --save react-helmet
   ```

8. The [package.json](https://github.com/siddhantvinchurkar/beegru-real-estate/blob/master/package.json "package.json") file lists all dependencies of this app so a quick way to execute steps 4 and 5 is:

   ```bash
   npm install --save
   ```

9. Okay, you are now ready to run this app and there are two ways to do that:

   1. Run the development server:

      ```bash
      npm run dev
      ```

      > The development server auto-refreshes the app every time a file is changed and runs on port 3000 ([http://localhost:3000](http://localhost:3000 "localhost on port 3000")).

   2. Run the production server:

      > To do this, you must first build the app using the following command:

      ```bash
      npm run build
      ```

      > This will create an optimised version of the app which is suitable for production environments. Once that is done, you can start the production server like so:

      ```bash
      sudo npm start
      ```

      > This will host the production build of the app on port 1010 ([http://localhost:1010](http://localhost:1010 "localhost on port 1010")).





## Life Hacks

1. If you use [![Some things in life are worth waiting for…](vs_code_logo.png "Visual Studio Code")](https://code.visualstudio.com/ "Visual Studio Code") you can run the following one word command to get started:

   ```bash
   ./codethis
   ```

   > But of course, you will need to set the right permissions first:

   ```bash
   sudo chmod +x codethis
   ```

2. To run the server in the background so the terminal can be closed or used for other tasks, simply append a trailing ampersand (```&```) to the command like so:

   ```bash
   # For development server
   npm run dev &
   # For production server
   sudo npm start &
   ```

3. If you don’t have access to a server that runs [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")or cannot afford a domain, just use the following one word command and follow the on-screen instructions:

   ```bash
   now
   ```

   > But of course, if you haven’t installed “```now```” yet, run this command first:

   ```bash
   sudo npm i -g now
   ```

   > At the end of it, a URL that looks a bit like this - [https://beegru-real-estate.now.sh/](https://beegru-real-estate.now.sh/ "Beegru Real Estate website") will be copied to your clipboard automatically. This is the URL that points to your [![Some things in life are worth waiting for…](node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")server running on [![Some things in life are worth waiting for…](zeit_logo.png "Zeit")](https://zeit.co/ "Zeit").







## License and Privacy

1. We believe in freedom. Which is why this repository is licensed using [![Some things in life are worth waiting for…](wtfpl-badge.png "WTFPL")](http://www.wtfpl.net/ "WTFPL") ([view license](https://github.com/siddhantvinchurkar/beegru-real-estate/blob/master/LICENSE.md "License - WTFPL")).
2. In a world where data is king, guarding privacy is a must. Which is why the Beegru Real Estate website will never collect any personal information. That being said, we still maintain a __GDPR compliant privacy policy__ available at [https://beegru-real-estate.wildscript.tech/privacy](https://beegru-real-estate.wildscript.tech/privacy "Privacy Policy").
3. The [![Some things in life are worth waiting for…](wtfpl-badge.png "WTFPL")](http://www.wtfpl.net/ "WTFPL") license is given to allow everyone to use the code as they wish, not our services. Which is why we maintain a set of terms of service also available at [https://beegru-real-estate.wildscript.tech/privacy](https://beegru-real-estate.wildscript.tech/privacy "Privacy Policy").





## Credits

1. Credit goes to [Purushotham Ramesh](https://drive.google.com/open?id=1Xb5MgED9c4m-M59Feb5PmuStdfKjbMEI "Purushotham Ramesh") for designing the front end.
2. Credit also goes to all employees of Beegru, who actively supported the development of this app.