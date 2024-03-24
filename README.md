# Real Time Bus Tracker
**Description:** This program tracks in real time all the buses running the Bus 1 route between the Harvard and MIT campuses. The program pulls data on a loop from the Massachusetts Bay Transportation Authority (MBTA) V3 API Portal, and loads the data onto a Google Map via the Google Maps Javascript API.  

**Instructions on how to run on your machine:**  
1. Create a Google Cloud project at the following link:  
    https://developers.google.com/maps/documentation/javascript/cloud-setup
2. Create an API key for the Google Cloud project you created. Link for this is below:
   
    https://developers.google.com/maps/documentation/javascript/get-api-key
3. Take the API Key you created in the previous step and then replace ‘APIKey’ text in the line below from the ‘index.html’ file.  This code is in line 8 of the 'index.html' file.
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=APIKey=initMap"></script>
4. Download the following files in this respository: index.html, mapanimation.js, style.css, blue.png, & red.png. Save them locally, and then load the 'index.html' file to an Internet browser (Chrome, etc.).  

**Roadmap for future improvements:**  

By June 30th:
* Add bus # to the message when user hovers over a bus marker
* Make formatting improvements to the map  

**Licence information:**  

Copyright (c) 2024 Brian Taney  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
