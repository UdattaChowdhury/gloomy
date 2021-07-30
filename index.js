function gloomy(options){
    let images = document.querySelectorAll('.gloomy');

    if (options.gloom_type === hard){
        options.gloom_type = '0px';
    }else{
        options.gloom_type = '20px';
    }

    images.forEach(image => {
        image.style.boxShadow = `20px 20px ${options.gloom_type} 2px rgba(0,0,0,0.20)`;
        
        if (options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.gloomy = gloomy;