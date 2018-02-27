# themoviedb-proxy

This is API proxy for themoviedb based on express. 

## How to use

To use this apps you need to install and run it.

### Install

To install themoviedb-proxy, you need to clone this repository:

    git clone https://github.com/hrofiq/themoviedb-proxy

Change your working directory:

    cd themoviedb-proxy

Install required package:

    npm install

If you have not install node js, visit https://nodejs.org/ .
   
### Run
To run the apps, use:

    node ./bin/www APIKEY='[change_with_your_api_key]'
      
## API Reference
- [GET]	/most-popular -> to get most popular movie
- [GET]	/genres -> to get all genres
- [GET]	/genre/{genre-id} -> to get film by genre id
- [GET]	/year/{year} -> to get film by release year
- [GET]	/credit/{movie-id} -> go get movie cast
- [GET]	/person/{person-name} -> to get actor/actress information based on most relevant name