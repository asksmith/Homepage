export const getIconClassesByWeather = (weather) => {
    switch (weather.current_weather.weathercode){
        case 0:return ['Clear sky',['sunny','heavy']];
        case 1:return ['Mainly clear',['sunny']];
        case 2:return ['Partly cloudy,',['sunny'],['cloud']];
        case 3:return ['Overcast',['sunny'],['cloud','heavy']];
        case 45:return ['Fog',['fog']];
        case 48:return ['Fog depositing rime',['fog','heavy'],['snow']];
        case 51:return ['Drizzle light',['drizzle']];
        case 53:return ['Drizzle moderate',['drizzle','heavy']]
        case 55:return ['Drizzle dense intensity ',['drizzle','heavy'],['rainly']];
        case 56:return ['Freezing drizzle light',['drizzle'],['snow']];
        case 57:return ['Freezing drizzle dense intensity ',['drizzle','heavy'],['snow']];
        case 61:return ['Rain slight',['rainly']];
        case 63:return ['Rain moderate',['rainly','heavy']];
        case 65:return ['Rain heavy intensity',['rainly','heavy']];
        case 66:return ['Freezing rain light',['rainly'],['snow']];
        case 67:return ['Freezing rain heavy intensity ',['rainly','heavy'],['snow']];
        case 71:return ['Snow fall slight',['snowfall']];
        case 73:return ['Snow fall moderate',['snowfall','heavy']];
        case 75:return ['Snow fall heavy intensity ',['grain']];
        case 77:return ['Snow grains',['grain','heavy']];
        case 80:return ['Rain showers slight',['rainshowers']];
        case 81:return ['Rain showers moderate',['rainshowers','heavy']];
        case 82:return ['Rain showers violent',['rainshowers','heavy'],['rainly','heavy']];
        case 85:return ['Snow showers slight',['rainshowers'],['snow']];
        case 86:return ['Snow showers heavy',['rainshowers','heavy'],['snow','heavy']];
        case 95:return ['Thunderstorm',['thunder']];
        case 96:return ['Thunderstorm slight',['thunder','heavy']];
        case 99:return ['Thunderstorm heavy tail',['thunder','heavy']];
        default:return [];
        
    }
}