Write a function named cityWeather that returns an object representing the weather in a given city. The function should fetch the data from the mocked API.
Requirements
Implement the cityWeather function to satisfy the following requirements:
1. The function has one input parameter city, which is a string that cannot be empty. 
- Throw the "not a string" message if the city parameter is not a string
- Throw the "string is empty" if city is an empty string.
2. The BASE_URL variable will be imported at the top of your initial file; you need to concatenate the query prefix &q= between the BASE_URL and the city parameter (as the url) in order to fetch the data correctly like so:  <base url><query prefix><city parameter>
3. The fn should call the mocked API and return an object that contains the weather data for the specified city. The main property of the mocked response contains the data to be returned. The format of the returned object should be as follows: 
{
  "temp": 21,
  "feels_like": 19.54,
  "temp_min": 21,
  "temp_max": 21,
  "pressure": 1026,
  "humidity": 49
}
4. If the specified city doesn't exist, throw the "city not found" error.
Assumptions: The API fn (axios.get(url)) will handle blank spaces, Unicode characters and lower/upper case values (note that the fn will transform all chars to lower case to find a match.)

Successful response format: 
{
    status: 200,
    data: {
        ...,
        main: {
            temp: 21,
            feels_like: 19.54,
            temp_min: 21,
            temp_max: 21,
            pressure: 1026,
            humidity: 49
        },
        ...
    }
}

The error returned by the API has the following format: 
{
  "status": 404,
  "data": {
    "message": "city not found",
    "code": 404
  }
}

