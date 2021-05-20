let mix = require('laravel-mix');
mix.setPublicPath('dist');
mix.postCss('src/css/styles.css', 'dist/css', [
    require("tailwindcss"),
]);
mix.copy('src/*.html', 'dist/');
mix.copy('src/assets/*', 'dist/assets/');
mix.copy('src/js/*.js', 'dist/js/');
mix.browserSync({
    server: 'dist',
    files: ["dist/css/*.css", "dist/*.html", "dist/js/*.js"]
});
