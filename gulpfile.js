

var gulp = require('gulp'),
		newer = require('gulp-newer'),
		imagemin = require('gulp-imagemin');


var source = 'source/',
		dest = 'build/',
		images = {
			in: source + "/images/*.*",
			out: dest + "/images"
		}

		;

gulp.task('images', function(){
	return gulp.src(images.in)
	.pipe(newer(images.out))
	.pipe(imagemin())
	.pipe(gulp.dest(images.out));
});

gulp.task('default', function(){
		
}); 
