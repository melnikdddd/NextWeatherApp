export const countingTheDayTime = (sunrise: number, sunset: number): string => {
    const currentTime = Math.floor(Date.now() / 1000);

    return currentTime >= sunrise && currentTime <= sunset ?
        'day' : 'night';
}