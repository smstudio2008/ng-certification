export interface IWeatherModel {
    base: string;
    clouds: Clouds;
    cod: number;
    coord: Coord;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: Sys;
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: Wind;
}

export interface IForecastModel {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
}


interface Coord {
    lat: number;
    lon: number;
}

interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

interface Main {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    temp: number;
}

interface Wind {
    deg: number;
    speed: number;
}

interface Clouds {
    all: number;
}

interface Sys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
}

interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface List {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    pop: number;
    rain?: number;
}
